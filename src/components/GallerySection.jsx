import { useState } from "react"
import { Sparkles, Maximize2, X, ExternalLink } from "lucide-react"

import img1 from "/img1.png"
import img2 from "/img2.png"
import img3 from "/img3.png"
import img4 from "/img4.png"
import photo from "/Photo.png"
import heroBg from "../assets/images/hero-bg.webp"

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "AI Development & Coding",
      category: "Work & Projects",
      src: photo,
      desc: "Architecting full-stack React and AI models."
    },
    {
      id: 2,
      title: "Interactive Dashboards",
      category: "UI/UX Engineering",
      src: img1,
      desc: "Crafting real-time analytical dashboards and interfaces."
    },
    {
      id: 3,
      title: "Developer Portfolio Platform",
      category: "Web Architecture",
      src: img2,
      desc: "Responsive web engineering with modern dark aesthetics."
    },
    {
      id: 4,
      title: "Landscape & Creative Vision",
      category: "Visual Inspiration",
      src: img3,
      desc: "Finding design inspiration in creative ecosystems."
    },
    {
      id: 5,
      title: "System Design Blueprint",
      category: "Full-Stack Dev",
      src: img4,
      desc: "Building low-latency microservice architectures."
    },
    {
      id: 6,
      title: "Creative Workspace",
      category: "Ecosystem",
      src: heroBg,
      desc: "Modern digital workspace & engineering environment."
    }
  ];

  return (
    <section id="gallery" className="relative py-24 border-b border-border/20 overflow-hidden select-none">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              JOURNAL & INSIGHTS
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-shiny">
              Visual portfolio & moments.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              {galleryItems.length} SNAPSHOTS
            </span>
          </div>
        </div>

        {/* Masonry / Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-3xl overflow-hidden border border-border/40 bg-muted/20 hover:border-primary/60 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1.5 aspect-[16/11]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-sky-400 bg-sky-500/20 px-3 py-1 rounded-full border border-sky-500/30">
                    {item.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-md">
                    <Maximize2 size={14} />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 animate-fadeIn">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors z-50"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="max-w-5xl w-full flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-700 shadow-2xl max-h-[75vh]">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain bg-zinc-950 max-h-[75vh]"
              />
            </div>
            <div className="flex justify-between items-center px-2">
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  {activeImage.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {activeImage.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-400 max-w-sm text-right">
                {activeImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
