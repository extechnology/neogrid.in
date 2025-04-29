import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { ProjectGalleryData } from '../Hooks/AllProducts';
import { Project } from '../Types/projectGalleryTypes';


export default function ProjectGallery() {



    // States 
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    const [searchFocused, setSearchFocused] = useState(false);



    // Project Gallery Data 
    const { data = [], isFetching, isError, isLoading } = ProjectGalleryData()



    useEffect(() => {

        if (searchTerm.trim() === '') {

            setFilteredProjects(data); 

        } else {
            
            const results = data?.filter((project: Project) => {
                const searchLower = searchTerm.toLowerCase();
                return project.title.toLowerCase().includes(searchLower) ||
                    project.description.toLowerCase().includes(searchLower);
            });

            setFilteredProjects(results);

        }

    }, [searchTerm, data]);
    

    return (



        <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8">


            <div className="max-w-7xl mx-auto">


                <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    Project Gallery
                </h1>


                {/* Expanding Animated Search Bar */}
                <div className="relative mb-16 mx-auto max-w-md md:max-w-xl transition-all duration-500 ease-in-out">
                    <div className={`relative flex items-center transition-all duration-500 ${searchFocused ? 'transform scale-110' : ''
                        }`}>
                        <div className={`absolute left-3 transition-all duration-300 ${searchFocused ? 'text-blue-500' : 'text-gray-400'
                            }`}>
                            <Search size={20} />
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                            placeholder="Search projects..."
                            className={`w-full py-4 pl-10 pr-10 rounded-xl bg-white text-gray-800 placeholder-gray-400 
                ring-1 outline-none shadow-lg transition-all duration-500 ${searchFocused
                                    ? 'ring-blue-500 shadow-blue-200 ring-2'
                                    : 'ring-gray-200 hover:ring-gray-300'
                                }`}
                        />
                        {searchTerm && (
                            <button
                                onClick={()=>{setSearchTerm('')}}
                                className="absolute right-3 text-gray-400 hover:text-red-500 transition-colors duration-300"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>
                    <div className={`h-1 bg-blue-500 rounded-full mt-1 mx-auto transition-all duration-500 ${searchFocused ? 'w-full opacity-100' : 'w-0 opacity-0'
                        }`}></div>
                </div>





                {/* Projects Grid */}
                {isFetching || isError || isLoading ? (

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12">
                        {[1, 2].map(i => (
                            <div key={i} className="animate-pulse">
                                <div className="h-72 bg-gray-200 rounded-xl mb-4"></div>
                                <div className="h-7 bg-gray-200 rounded-full w-3/4 mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                            </div>
                        ))}
                    </div>


                ) : filteredProjects?.length === 0 ? (


                    <div className="text-center text-gray-400 py-16 animate-bounce">
                        No projects found for "{searchTerm.toUpperCase()}"
                    </div>


                ) : (


                    <div className="grid grid-cols-1 md:grid-cols-1 gap-12">


                        {filteredProjects?.map((project: Project) => (

                            <div
                                key={project?.id}
                                className="bg-white p-4 rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            >



                                {/* Project Title and Description */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 text-[#6bac15]">
                                        {project?.title.toUpperCase()}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project?.description}
                                    </p>
                                </div>



                                {/* Enhanced Images Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">

                                    {project?.images?.slice(0, 4).map((img, index) => (
                                        <div
                                            key={index}
                                            className={`relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${project?.title} image ${index + 1}`}
                                                loading='lazy'
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                <div className="text-white text-sm md:text-lg font-semibold transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                                    Image {index + 1}
                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                </div>

                            </div>

                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}