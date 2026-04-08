"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export interface PageData {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  previewUrl: string;
  prompt: string;
  isPremium: boolean;
  tags: string[];
}

function isVideoAsset(src: string) {
  return /\.(mp4|webm|ogg)$/i.test(src);
}

interface PageCardProps {
  page: PageData;
  onClick: (page: PageData) => void;
}

export function PageCard({ page, onClick }: PageCardProps) {
  return (
    <motion.div
      layoutId={page.id}
      onClick={() => onClick(page)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 card-glow"
    >
      {/* Thumbnail */}
      <div className="aspect-[16/10] relative overflow-hidden bg-zinc-800">
        {isVideoAsset(page.thumbnail) ? (
          <video
            src={page.thumbnail}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <Image
            src={page.thumbnail}
            alt={page.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        
        {/* Premium Badge */}
        {page.isPremium && (
          <div className="absolute top-3 right-3 bg-amber-500/90 text-black px-2 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
            <Lock className="w-3 h-3" />
            Premium
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Design
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-zinc-100 font-medium tracking-tight text-lg group-hover:text-accent transition-colors">
            {page.title}
          </h3>
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold bg-zinc-800/50 px-2 py-0.5 rounded border border-zinc-700/50">
            {page.category}
          </span>
        </div>
        <div className="flex gap-2 mt-1">
          {page.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[10px] text-zinc-400">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
