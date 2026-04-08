"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lock } from "lucide-react";
import Image from "next/image";
import { CopyButton } from "./CopyButton";
import { type PageData } from "./PageCard";
import { useEffect, useState } from "react";

interface PreviewModalProps {
  page: PageData | null;
  onClose: () => void;
}

function isVideoAsset(src: string) {
  return /\.(mp4|webm|ogg)$/i.test(src);
}

export function PreviewModal({ page, onClose }: PreviewModalProps) {
  const [showPremiumDialog, setShowPremiumDialog] = useState(false);
  const [isRedirectingToCheckout, setIsRedirectingToCheckout] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (page) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setShowPremiumDialog(false);
      setIsRedirectingToCheckout(false);
      setCheckoutError(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [page]);

  const handlePremiumClick = () => {
    setCheckoutError(null);
    setShowPremiumDialog(true);
  };

  const handleBuyTemplate = async () => {
    if (!page) {
      return;
    }

    setIsRedirectingToCheckout(true);
    setCheckoutError(null);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageId: page.id,
        }),
      });

      const rawResponse = await response.text();
      const data = (rawResponse ? JSON.parse(rawResponse) : {}) as {
        url?: string;
        error?: string;
      };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? "Unable to start checkout.");
      }

      window.location.href = data.url;
    } catch (error) {
      setCheckoutError(
        error instanceof Error
          ? error.message
          : "Unable to start checkout.",
      );
      setIsRedirectingToCheckout(false);
    }
  };

  return (
    <AnimatePresence>
      {page && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-zoom-out"
          />

          {/* Modal Content */}
          <motion.div
            layoutId={page.id}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed left-1/2 top-[5%] -translate-x-1/2 w-[94%] max-w-6xl h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl z-[101] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
              <div className="flex flex-col">
                <h2 className="text-xl font-medium text-white tracking-tight">
                  {page.title}
                </h2>
                <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
                  {page.category}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <CopyButton
                  text={page.prompt}
                  locked={page.isPremium}
                  lockedLabel={page.isPremium ? "Premium Template" : undefined}
                  onLockedClick={page.isPremium ? handlePremiumClick : undefined}
                  className={
                    page.isPremium
                      ? "bg-amber-500 text-black border-amber-400 hover:bg-amber-400 hover:text-black"
                      : undefined
                  }
                />

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
              {/* Preview Pane (Left) */}
              <div className="flex-1 h-full overflow-y-auto custom-scrollbar bg-black p-4 md:p-8">
                <div className="max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 min-h-[500px] relative">
                  {/* Browser-like Header */}
                  <div className="h-8 bg-zinc-800 flex items-center px-4 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  
                  {/* Mock Page Content (Tall Image) */}
                  <div className="relative w-full">
                    {isVideoAsset(page.previewUrl) ? (
                      <video
                        src={page.previewUrl}
                        className="w-full h-auto"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <Image
                        src={page.previewUrl}
                        alt={`${page.title} full preview`}
                        width={1200}
                        height={2400}
                        className="w-full h-auto"
                        priority
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Details Side Panel (Right - Desktop only) */}
              <div className="hidden lg:flex w-80 h-full border-l border-zinc-800 flex-col p-6 gap-6 bg-zinc-950/50">
                <section>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">About</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    This is a high-performance, dark-themed AI-generated design optimized for speed and conversion.
                  </p>
                </section>

                <section>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {page.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg text-xs hover:border-zinc-700 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>

                <div className="mt-auto pt-6 border-t border-zinc-800">
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest leading-loose">
                    Generated with AI<br />
                    Phased Rollout v1.0
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {showPremiumDialog && page?.isPremium ? (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[109] bg-black/70"
                  onClick={() => {
                    if (!isRedirectingToCheckout) {
                      setShowPremiumDialog(false);
                    }
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  className="fixed left-1/2 top-1/2 z-[110] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-amber-500/30 bg-zinc-950 p-6 shadow-2xl"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-black">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                        Premium Template
                      </p>
                      <h3 className="text-xl font-semibold text-white">
                        Unlock this prompt for Rs 200
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    {page.title} is a premium template. Buy access to continue to
                    the Stripe payment gateway, or cancel and keep browsing.
                  </p>

                  {checkoutError ? (
                    <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      {checkoutError}
                    </p>
                  ) : null}

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={handleBuyTemplate}
                      disabled={isRedirectingToCheckout}
                      className="flex-1 rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isRedirectingToCheckout
                        ? "Redirecting..."
                        : "Buy for Rs 200"}
                    </button>
                    <button
                      onClick={() => setShowPremiumDialog(false)}
                      disabled={isRedirectingToCheckout}
                      className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
