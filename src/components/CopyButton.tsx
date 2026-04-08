"use client";

import { useState } from "react";
import { Check, Copy, Lock } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CopyButtonProps {
  text: string;
  className?: string;
  locked?: boolean;
  onLockedClick?: () => void;
  lockedLabel?: string;
}

export function CopyButton({
  text,
  className,
  locked = false,
  onLockedClick,
  lockedLabel = "Premium Template",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (locked) {
      onLockedClick?.();
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
        "bg-white/10 hover:bg-white/20 border border-white/10 hover:border-accent group",
        copied ? "text-accent border-accent" : "text-white/70 hover:text-white",
      className
    )}
    >
      {locked ? (
        <>
          <Lock className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span className="text-sm font-medium">{lockedLabel}</span>
        </>
      ) : copied ? (
        <>
          <Check className="w-4 h-4" />
          <span className="text-sm font-medium">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">Copy Prompt</span>
        </>
      )}
    </button>
  );
}
