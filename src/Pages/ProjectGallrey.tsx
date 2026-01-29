"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import ProjectModal from "../Components/ProjectModal"
import { ProjectGalleryData } from "../Hooks/AllProducts"
import { Project } from "../Types/projectGalleryTypes"



export default function ProjectGallery() {


    const { data = [], isLoading } = ProjectGalleryData()
    const [search, setSearch] = useState("")
    const [activeProject, setActiveProject] = useState<Project | null>(null)


    const filtered = data.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    )



    return (
        <div className="min-h-screen bg-white px-4 md:px-10 py-20">
            <h1 className="text-5xl font-bold text-center text-[#6bac15] mb-10">
                Project Gallery
            </h1>

            {/* Search */}
            <div className="max-w-xl mx-auto mb-14 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search projects..."
                    className="w-full pl-12 py-4 rounded-xl border shadow-md focus:ring-2 focus:ring-[#6bac15] outline-none"
                />
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {isLoading &&
                    Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-80 bg-gray-200 rounded-xl animate-pulse" />
                    ))}

                {filtered.map(project => (
                    <motion.div
                        key={project.id}
                        layout
                        whileHover={{ y: -6 }}
                        onClick={() => setActiveProject(project)}
                        className="bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden"
                    >
                        <img
                            src={project.images[0]}
                            className="h-56 w-full object-cover"
                            alt={project.title}
                        />

                        <div className="p-4">
                            <h3 className="font-bold text-lg uppercase">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {activeProject && (
                    <ProjectModal
                        project={activeProject}
                        onClose={() => setActiveProject(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}
