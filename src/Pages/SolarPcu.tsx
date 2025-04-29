import { Link } from "react-router-dom"
import Filtertext from "../Hooks/FilterText";

export default function SolarPcu() {



    // Update the filter text
    const { UpdateKey } = Filtertext()

    const Solar_pannel = [

        {

            category: "grid_interactive_inverter",
            tittle: "INBUILT SOLAR PCU",
            description: "",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [

                { text: "Pure Sine wave", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Advanced functional display ", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Intelligent Power sharing", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Intelli Current Boost", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },

            ],
            warranty: "60 Months",
            capacity: "1450VA up to 7500VA",
            voltage: "12VDC | 36VDC | 24VDC | 48VDC | 72VDC | 1 Coil MMPT I 2 Coil MPPT I 3 Coil MPPT",
            maxload: ""

        },



        {

            category: "solar_pcu",
            tittle: "HEAVY DUTY INVERTER",
            description: "",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [

                { text: "Pure Sine wave", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Advanced functional display ", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Intelligent Power sharing", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Intelli Current Boost", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },

            ],
            warranty: "60 Months",
            capacity: ":1450VA UP TO 10000VA  ",
            voltage: "12VDC I 24VDC UP TO 120V DC",
            maxload: "1000W to 8000W"

        },

        {

            category: "solar_pcu",
            tittle: "LI-ON",
            description: "INBUILT LITHIUM BATTERY INVERTER & UPS ",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [

                { text: "Integrated Battery Storage", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Eco-Friendly", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "High Efficiency", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Compact Design", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Longer Lifespan", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Lightweight Design", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Deep Discharge Support", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Smart Battery Management", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Quick Installation", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },

            ],
            warranty: "60 Months",


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

                                {

                                    item.capacity ?

                                        <div className="mt-6 text-white text-center grid sm:grid-cols-1 grid-cols-1 gap-y-3 gap-x-2">

                                            <p className="font-medium">Capacity: {item.capacity}</p>
                                            <p className="font-medium">Voltage: {item.voltage}</p>
                                            <p className="font-medium">Warranty: {item.warranty}</p>
                                            {item.maxload ? <p className="font-medium">Warranty: {item.maxload}</p> : ""}


                                        </div>

                                        :

                                        <div className="mt-6 text-white text-center grid sm:grid-cols-1 grid-cols-1 gap-y-3 gap-x-2">

                                            <p className="font-medium text-xl">Warranty: {item.warranty}</p>

                                        </div>

                                }


                            </div>

                        </div>


                    ))

                }

            </section>


        </>


    )



}
