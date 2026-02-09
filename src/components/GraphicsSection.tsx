import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Palette } from "lucide-react";

const graphicsCategories = [
    { id: "all", label: "All Graphics", icon: ImageIcon },
    { id: "ads", label: "Ad Creatives", icon: Palette },
];

const graphicsImages = [
    // Ad Creatives
    { src: "/WhatsApp Image 2026-02-05 at 7.04.34 PM (1).jpeg", alt: "Real Estate Marketing", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.34 PM.jpeg", alt: "Property Ad", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.35 PM.jpeg", alt: "Marketing Campaign", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.36 PM (1).jpeg", alt: "Ad Visual", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.36 PM.jpeg", alt: "Creative Design", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.37 PM.jpeg", alt: "Real Estate Creative", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.38 PM (1).jpeg", alt: "Campaign Material", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.38 PM.jpeg", alt: "Marketing Visual", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.39 PM.jpeg", alt: "Ad Campaign", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.40 PM (1).jpeg", alt: "Property Marketing", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.40 PM.jpeg", alt: "Real Estate Ad", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.41 PM.jpeg", alt: "Campaign Creative", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.42 PM (1).jpeg", alt: "Marketing Design", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.42 PM.jpeg", alt: "Ad Visual", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.43 PM.jpeg", alt: "Real Estate Campaign", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.44 PM.jpeg", alt: "Property Advertisement", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.45 PM (1).jpeg", alt: "Marketing Material", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.45 PM.jpeg", alt: "Campaign Visual", category: "ads" },
];

export function GraphicsSection() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredImages =
        selectedCategory === "all"
            ? graphicsImages
            : graphicsImages.filter((img) => img.category === selectedCategory);

    const openModal = (index: number) => {
        const clickedImage = filteredImages[index];
        const actualIndex = graphicsImages.findIndex(
            (img) => img.src === clickedImage.src
        );
        setSelectedImage(actualIndex >= 0 ? actualIndex : index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction: "prev" | "next") => {
        if (selectedImage === null) return;
        if (direction === "prev") {
            setSelectedImage(
                selectedImage === 0 ? graphicsImages.length - 1 : selectedImage - 1
            );
        } else {
            setSelectedImage(
                selectedImage === graphicsImages.length - 1 ? 0 : selectedImage + 1
            );
        }
    };

    return (
        <section id="graphics" className="py-20 md:py-32">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-4xl font-bold md:text-5xl font-display">
                        Our <span className="text-accent">Graphics</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-2xl mx-auto text-lg text-text-muted">
                        Visual designs that convert: Ad creatives, social media graphics, and
                        marketing materials that drive engagement and results.
                    </motion.p>
                </div>

                {/* Graphics Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
                    <AnimatePresence mode="wait">
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={`${image.src}-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.03 }}
                                onClick={() => openModal(index)}
                                className="relative overflow-hidden transition-all duration-300 border cursor-pointer group aspect-square rounded-2xl border-white/10 hover:border-primary/50 bg-surface/30">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 group-hover:opacity-100">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-sm font-medium text-white">{image.alt}</p>
                                        <span className="mt-1 text-xs capitalize text-white/70">
                                            {image.category}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3">
                    <div className="p-6 text-center border rounded-2xl bg-surface/30 border-white/10">
                        <div className="mb-2 text-3xl font-bold text-transparent md:text-4xl font-display bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {graphicsImages.length}+
                        </div>
                        <p className="font-medium text-text-muted">Ad Creatives</p>
                    </div>
                    <div className="p-6 text-center border rounded-2xl bg-surface/30 border-white/10">
                        <div className="mb-2 text-3xl font-bold text-transparent md:text-4xl font-display bg-clip-text bg-gradient-to-r from-secondary to-accent">
                            100%
                        </div>
                        <p className="font-medium text-text-muted">Client Satisfaction</p>
                    </div>
                    <div className="p-6 text-center border rounded-2xl bg-surface/30 border-white/10">
                        <div className="mb-2 text-3xl font-bold text-transparent md:text-4xl font-display bg-clip-text bg-gradient-to-r from-accent to-primary">
                            24/7
                        </div>
                        <p className="font-medium text-text-muted">Creative Support</p>
                    </div>
                </motion.div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                            onClick={closeModal}>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative max-w-7xl w-full max-h-[90vh]"
                                onClick={(e) => e.stopPropagation()}>
                                <button
                                    onClick={closeModal}
                                    className="absolute z-10 flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                                    <X className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage("prev");
                                    }}
                                    className="absolute z-10 flex items-center justify-center w-12 h-12 text-white transition-colors -translate-y-1/2 rounded-full left-4 top-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage("next");
                                    }}
                                    className="absolute z-10 flex items-center justify-center w-12 h-12 text-white transition-colors -translate-y-1/2 rounded-full right-4 top-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                <img
                                    src={graphicsImages[selectedImage].src}
                                    alt={graphicsImages[selectedImage].alt}
                                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                                />

                                <div className="absolute px-4 py-2 -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-black/50 backdrop-blur-sm">
                                    <p className="text-sm text-white">
                                        {selectedImage + 1} / {graphicsImages.length}
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

