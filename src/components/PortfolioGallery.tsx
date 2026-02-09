import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioImages = [
  { src: "/1.png", alt: "Campaign Performance Dashboard" },
  { src: "/2.png", alt: "Ad Campaign Results" },
  { src: "/3.png", alt: "Marketing Metrics" },
  { src: "/4.png", alt: "Campaign Analytics" },
  { src: "/5.png", alt: "Performance Data" },
  { src: "/6.png", alt: "Ad Results" },
  { src: "/7.png", alt: "Campaign Dashboard" },
  { src: "/8.png", alt: "Marketing Performance" },
  { src: "/9.png", alt: "Analytics Report" },
  { src: "/WhatsApp Image 2026-02-05 at 7.03.42 PM.jpeg", alt: "Real Estate Ad Creative" },
  { src: "/WhatsApp Image 2026-02-05 at 7.03.43 PM.jpeg", alt: "Property Marketing" },
  { src: "/WhatsApp Image 2026-02-05 at 7.03.44 PM (1).jpeg", alt: "Real Estate Campaign" },
  { src: "/WhatsApp Image 2026-02-05 at 7.03.44 PM.jpeg", alt: "Marketing Creative" },
  { src: "/WhatsApp Image 2026-02-05 at 7.03.45 PM (1).jpeg", alt: "Ad Design" },
  { src: "/WhatsApp Image 2026-02-05 at 7.03.45 PM.jpeg", alt: "Campaign Visual" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.14 PM (1).jpeg", alt: "Real Estate Ad" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.14 PM.jpeg", alt: "Property Advertisement" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.15 PM (1).jpeg", alt: "Marketing Material" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.15 PM (2).jpeg", alt: "Ad Creative" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.15 PM.jpeg", alt: "Campaign Design" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.34 PM (1).jpeg", alt: "Real Estate Marketing" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.34 PM.jpeg", alt: "Property Ad" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.35 PM.jpeg", alt: "Marketing Campaign" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.36 PM (1).jpeg", alt: "Ad Visual" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.36 PM.jpeg", alt: "Creative Design" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.37 PM.jpeg", alt: "Real Estate Creative" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.38 PM (1).jpeg", alt: "Campaign Material" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.38 PM.jpeg", alt: "Marketing Visual" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.39 PM.jpeg", alt: "Ad Campaign" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.40 PM (1).jpeg", alt: "Property Marketing" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.40 PM.jpeg", alt: "Real Estate Ad" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.41 PM.jpeg", alt: "Campaign Creative" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.42 PM (1).jpeg", alt: "Marketing Design" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.42 PM.jpeg", alt: "Ad Visual" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.43 PM.jpeg", alt: "Real Estate Campaign" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.44 PM.jpeg", alt: "Property Advertisement" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.45 PM (1).jpeg", alt: "Marketing Material" },
  { src: "/WhatsApp Image 2026-02-05 at 7.04.45 PM.jpeg", alt: "Campaign Visual" },
];

export function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? portfolioImages.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === portfolioImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-4">
            Our <span className="text-secondary">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted max-w-2xl mx-auto text-lg">
            Explore our work: Campaign results, ad creatives, and marketing
            materials that drive real business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              onClick={() => openModal(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-surface/30">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={closeModal}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                  <X className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("prev");
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("next");
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                  <ChevronRight className="w-6 h-6" />
                </button>

                <img
                  src={portfolioImages[selectedImage].src}
                  alt={portfolioImages[selectedImage].alt}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="text-white text-sm">
                    {selectedImage + 1} / {portfolioImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

