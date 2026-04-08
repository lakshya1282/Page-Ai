"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lock } from "lucide-react";
import Image from "next/image";
import { CopyButton } from "./CopyButton";
import { type PageData } from "./PageCard";
import { useEffect } from "react";

interface PreviewModalProps {
  page: PageData | null;
  onClose: () => void;
}

function isVideoAsset(src: string) {
  return /\.(mp4|webm|ogg)$/i.test(src);
}

export function PreviewModal({ page, onClose }: PreviewModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (page) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [page]);

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
                {page.isPremium ? (
                  <button className="flex items-center gap-2 px-6 py-2 bg-amber-500 hover:bg-amber-600 text-black text-sm font-bold rounded-full transition-all group">
                    <Lock className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Unlock Prompt
                  </button>
                ) : (
                  <CopyButton text={page.prompt} />
                )}
                
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
        </>
      )}
    </AnimatePresence>
  );
}
