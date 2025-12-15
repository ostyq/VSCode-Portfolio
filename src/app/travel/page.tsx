'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import mapHighlights from '../../../assets/map_highlights.jpg';
import mapFull from '../../../assets/map_full.jpg';

// Load map client-side only to avoid SSR/Turbopack hiccups
const TravelMap = dynamic(() => import('@/components/TravelMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[300px] rounded-md border border-[#2d2d2d] text-[#9ca3af]">
      Loading map…
    </div>
  ),
});

export default function Travel() {
  return (
    <div className="markdown-body flex flex-col h-full bg-[#1e1e1e] text-[#d4d4d4] overflow-auto">
      <div className="overflow-auto space-y-6 sm:space-y-8">
        <header className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 border-b border-[#2d2d2d] pb-2">
            # Travels
          </h1>
          <p className="text-sm sm:text-base text-[#d4d4d4]">
            I keep a pinboard at home to remember places I&apos;ve visited and dream
            about what&apos;s next. This is a digital version of that map so I can
            keep it updated alongside the rest of this site.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#4ec9b0]">
            ## World view
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4]">
            Red pins mark cities I&apos;ve already explored; gold pins are on my
            wishlist. I&apos;ll keep tweaking the locations over time, but this is a
            fun starting point inspired by the map on my wall.
          </p>
          <TravelMap />
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#4ec9b0]">
            ## Wall inspiration
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4]">
            Here&apos;s the physical map at home that inspired this view. The digital
            version is easier to keep up-to-date, but the pins on the wall still
            make me smile.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={mapHighlights}
                alt="Close-up of my travel pinboard with red and gold pins"
                fill
                className="rounded-md object-cover border border-[#2d2d2d]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={mapFull}
                alt="Full view of my travel pinboard hanging on the wall"
                fill
                className="rounded-md object-cover border border-[#2d2d2d]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
