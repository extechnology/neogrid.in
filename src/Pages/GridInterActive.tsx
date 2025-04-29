import { Link } from "react-router-dom"
import Filtertext from "../Hooks/FilterText";

export default function GridInterActive() {


    // Update the filter text
    const {UpdateKey} = Filtertext()


    const Solar_pannel = [

        {

            category: "grid_interactive_inverter",
            tittle: "GRID INTERACTIVE INVERTER (GI)",
            description: "Homes and establishments that need to reduce their electricity bills",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [
                { text: "Operating voltage range 180-276 VAC suitable for Indian grids", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Lowest self-consumption at night (< 1W) leading greater energy yield", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Best-in-class intelligent grid interface/Management", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "8-year warranty ensure peace of mind and increased ROI", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Wide MPPT voltage range and efficiency > 99.9 %to yield greater solar energy", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" }
            ],
            warranty: "10 Years",

        },

        {

            category: "grid_interactive_inverter",
            tittle: "GRID INTERACTIVE HYBRID INVERTER (GIH)",
            description: "Homes and establishments need power backup for emergency loads apart from reduce electricity bills",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [
                { text: "highest Efficiency 85% with a battery system, 95% with solar system", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Best-in-class overload capacity 150% - 30Sec, 110% - 3Min", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Eco/UPS mode Maximizing battery backup", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Capable of handling Different battery types Flooded/Gel/Sealed/Li-ion", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Fanless design for effective natural cooling", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" }
            ],
            warranty: "60 Months",

        },

        {

            category: "grid_interactive_inverter",
            tittle: "3 PHASE GRID INTERACTIVE INVERTER",
            description: "3 Phase Inverters is an advanced technology with all the prid interactive features, including the flexibility for different large-scale PV systems and applications",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [
                { text: "I-V scanning functionality archive enhance safety,proactive maintenance Higher O&M efficiency and lower operation cost", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Wide MPPT voltage range efficiency > 99.9% Yield greater solar energy", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Highest-rated PV input power ensure maximized utilization of solar energy", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Best-in-class real-time monitoring solar system installed,leading to supervisor customer service", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" }
            ],
            warranty: "10 Years",

        },


    ]


    window.scrollTo({ top: 0, behavior: 'smooth', });

    return (





        <>



            <section className="py-[5.4rem]">


                {

                    Solar_pannel.map((item, index) => (


                        <div className=" bg-white  flex flex-col items-center mt-8 sm:mt-10" key={index} data-aos="zoom-in" data-aos-duration="600">

                            <div className="rounded-lg shadow-lg p-5 flex flex-col items-center w-11/12 md:w-3/4 lg:w-[85rem]" style={{ backgroundImage: "linear-gradient(rgb(2, 82, 2),rgb(8, 134, 8))" }}>

                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-2">
                                    {item.tittle}
                                </h2>

                                <h3 className="text-lg md:text-xl font-semibold shadow-sm text-center text-white mb-8">
                                    {item.description}
                                </h3>


                                <div className="flex flex-col lg:flex-row justify-evenly items-center w-full">

                                    {/* Battery Image */}
                                    <div className="mb-6 lg:mb-0">
                                        <img
                                            src={item.image}
                                            alt="Battery"
                                            loading="lazy"
                                            className="w-80 h-64 rounded-lg"
                                        />
                                    </div>


                                    {/* Feature Buttons */}
                                    <div className="grid grid-cols-1 w-full sm:w-1/2 sm:grid-cols-2 gap-4 lg:ml-10">

                                        {

                                            item.features.map((feature, index) => (

                                                <div key={index} className=" text-white p-4 rounded-lg text-center shadow-lg flex flex-col justify-center items-center" style={{ backgroundImage: "linear-gradient(rgb(5, 175, 5) , rgb(16, 212, 16))" }}>
                                                    <img src={feature.icon} loading="lazy" className="w-11 h-11 mb-5" alt="" />
                                                    <p>{feature.text}</p>

                                                </div>

                                            ))

                                        }

                                    </div>


                                </div>

                                {/* Buttons */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5 mt-10">

                                    <Link to={'/filter'} onClick={()=>{UpdateKey(item.tittle.toLocaleUpperCase())}}>
                                        <button className="bg-blue-600 ms-3  text-white hover:bg-white hover:text-black  hover:border-black py-2 px-6 rounded-full shadow-lg text-sm font-medium">
                                            View All Variants <i className="fa-regular fa-eye ms-1"></i>
                                        </button>
                                    </Link>


                                    <button className="bg-black text-white hover:bg-white hover:text-black  hover:border-black py-2 px-6 rounded-full shadow-lg text-sm font-medium transition duration-200">
                                        Download Brochure <i className="fa-solid fa-download ms-1"></i>
                                    </button>

                                </div>

                                {/* Details */}
                                <div className="mt-6 text-white text-center grid sm:grid-cols-1 grid-cols-1 gap-y-3 gap-x-2">

                                    <p className="font-medium text-xl">Warranty: {item.warranty}</p>

                                </div>


                            </div>

                        </div>


                    ))

                }

            </section>



        </>






    )









}
