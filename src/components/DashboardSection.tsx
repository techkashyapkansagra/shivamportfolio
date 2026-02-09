import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, BarChart3, TrendingUp, Target } from "lucide-react";

const dashboardImages = [
    { src: "/WhatsApp Image 2026-02-05 at 7.03.42 PM.jpeg", alt: "Real Estate Ad Creative", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.03.43 PM.jpeg", alt: "Property Marketing", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.03.44 PM (1).jpeg", alt: "Real Estate Campaign", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.03.44 PM.jpeg", alt: "Marketing Creative", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.03.45 PM (1).jpeg", alt: "Ad Design", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.03.45 PM.jpeg", alt: "Campaign Visual", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.14 PM (1).jpeg", alt: "Real Estate Ad", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.14 PM.jpeg", alt: "Property Advertisement", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.15 PM (1).jpeg", alt: "Marketing Material", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.15 PM (2).jpeg", alt: "Ad Creative", category: "ads" },
    { src: "/WhatsApp Image 2026-02-05 at 7.04.15 PM.jpeg", alt: "Campaign Design", category: "ads" },
];

export function DashboardSection() {
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
                selectedImage === 0 ? dashboardImages.length - 1 : selectedImage - 1
            );
        } else {
            setSelectedImage(
                selectedImage === dashboardImages.length - 1 ? 0 : selectedImage + 1
            );
        }
    };

    return (
        <section id="dashboard" className="py-20 md:py-32 bg-surface/30">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-4xl font-bold md:text-5xl font-display">
                        Campaign <span className="text-secondary">Results</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-2xl mx-auto text-lg text-text-muted">
                        Real-time performance dashboards and analytics that showcase the
                        measurable impact of our campaigns.
                    </motion.p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                    {dashboardImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => openModal(index)}
                            className="relative overflow-hidden transition-all duration-300 border cursor-pointer group rounded-2xl border-white/10 hover:border-primary/50 bg-white/5 backdrop-blur-sm">
                            <div className="relative aspect-video">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3">
                    <div className="p-6 text-center border rounded-2xl bg-white/5 border-white/10">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <div className="mb-2 text-2xl font-bold text-transparent md:text-3xl font-display bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Real-Time
                        </div>
                        <p className="font-medium text-text-muted">Live Analytics</p>
                    </div>
                    <div className="p-6 text-center border rounded-2xl bg-white/5 border-white/10">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20">
                            <Target className="w-6 h-6 text-secondary" />
                        </div>
                        <div className="mb-2 text-2xl font-bold text-transparent md:text-3xl font-display bg-clip-text bg-gradient-to-r from-secondary to-accent">
                            Data-Driven
                        </div>
                        <p className="font-medium text-text-muted">Performance Insights</p>
                    </div>
                    <div className="p-6 text-center border rounded-2xl bg-white/5 border-white/10">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20">
                            <BarChart3 className="w-6 h-6 text-accent" />
                        </div>
                        <div className="mb-2 text-2xl font-bold text-transparent md:text-3xl font-display bg-clip-text bg-gradient-to-r from-accent to-primary">
                            Transparent
                        </div>
                        <p className="font-medium text-text-muted">Clear Reporting</p>
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
                                    src={dashboardImages[selectedImage].src}
                                    alt={dashboardImages[selectedImage].alt}
                                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                                />

                                <div className="absolute px-4 py-2 -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-black/50 backdrop-blur-sm">
                                    <p className="text-sm text-white">
                                        {selectedImage + 1} / {dashboardImages.length}
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

