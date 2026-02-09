import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

interface Client {
    name: string;
    logo?: string;
    category?: string;
}

const dashboardImages = [
    { src: "/1.png", alt: "Campaign Performance Dashboard" },
    { src: "/2.png", alt: "Ad Campaign Results" },
    { src: "/3.png", alt: "Marketing Metrics" },
    { src: "/4.png", alt: "Campaign Analytics" },
    { src: "/5.png", alt: "Performance Data" },
    { src: "/6.png", alt: "Ad Results" },
    { src: "/7.png", alt: "Campaign Dashboard" },
    { src: "/8.png", alt: "Marketing Performance" },
    { src: "/9.png", alt: "Analytics Report" },
];

const clients: Client[] = [
    { name: "Krishna Real Estate", category: "Real Estate" },
    { name: "JAY PROPERTYS", category: "Real Estate" },
    { name: "SATNAM REAL ESTATE", category: "Real Estate" },
    { name: "MAN PROPERTY CONSULTANT", category: "Real Estate" },
    { name: "Shree Sai Realty", category: "Real Estate" },
    { name: "SAWARIYA PROPERTY CONSULTANCY", category: "Real Estate" },
    { name: "MONARCH REALTOR", category: "Real Estate" },
    { name: "TORE PROPERTIES", category: "Real Estate" },
    { name: "REALTY BUDDY", category: "Real Estate" },
    { name: "FLORENCE 242", category: "Real Estate" },
    { name: "TRUESTAR REALTY", category: "Real Estate" },
    { name: "ELENZA Vibe", category: "Real Estate" },
    { name: "YASH REALTY", category: "Real Estate" },
    { name: "TERRANOVA LIFESPACES", category: "Real Estate" },
    { name: "CENTRUM REALTORS", category: "Real Estate" },
    { name: "LEELA TRAVELS", category: "Travel" },
    { name: "Sumeru Solution", category: "Solar Energy" },
    { name: "SuratVR Properties", category: "Real Estate" },
];

export function ClientsSection() {
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
        <section id="clients" className="py-20 md:py-32 bg-surface/30">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 text-4xl font-bold md:text-5xl font-display">
                        Trusted <span className="text-primary">Clients</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="max-w-2xl mx-auto text-lg text-text-muted">
                        Discover the renowned names in real estate and beyond who trust us
                        to drive their growth.
                    </motion.p>
                </div>

                {/* Clients Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                    {dashboardImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => openModal(index)}
                            className="relative overflow-hidden transition-all duration-300 border cursor-pointer group rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm">
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 text-center">
                    <div className="inline-flex items-center px-6 py-3 space-x-2 border rounded-full bg-white/5 border-white/10">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-text-muted">
                            {clients.length}+ Trusted Partners
                        </span>
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
