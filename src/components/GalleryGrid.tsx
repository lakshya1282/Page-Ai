"use client";

import { useState } from "react";
import { PageCard, type PageData } from "./PageCard";
import { PreviewModal } from "./PreviewModal";

interface GalleryGridProps {
  initialPages: PageData[];
}

export function GalleryGrid({ initialPages }: GalleryGridProps) {
  const [selectedPage, setSelectedPage] = useState<PageData | null>(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {initialPages.map((page) => (
          <PageCard
            key={page.id}
            page={page}
            onClick={(p) => setSelectedPage(p)}
          />
        ))}
      </div>

      {/* Empty State */}
      {initialPages.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-zinc-500">
          <p className="text-lg">No gallery items found.</p>
        </div>
      )}

      {/* Preview Modal */}
      <PreviewModal
        page={selectedPage}
        onClose={() => setSelectedPage(null)}
      />
    </section>
  );
}
