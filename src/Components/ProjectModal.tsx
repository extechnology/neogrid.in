"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Project } from "../Types/projectGalleryTypes"

export default function ProjectModal({
    project,
    onClose,
}: {
    project: Project
    onClose: () => void
}) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={e => e.stopPropagation()}
                className="bg-white max-w-7xl w-full rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto"
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-black"
                >
                    <X size={26} />
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-6">
                    {project.title}
                </h2>

                {/* Images Grid – compact & clean like screenshot */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((img, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="overflow-hidden rounded-xl bg-gray-100"
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-56 md:h-80 object-cover"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </motion.div>
    )
}
