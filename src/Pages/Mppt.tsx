import { Link } from "react-router-dom"
import Filtertext from "../Hooks/FilterText";

export default function Mppt() {

    // Update the filter text
    const { UpdateKey } = Filtertext()

    window.scrollTo({ top: 0, behavior: 'smooth', });

    const Solar_pannel = [

        {

            category: "MPPT",
            tittle: "AUTO TRACING MPPT",
            description: "Maxumum Power Point tracking (MPPT) is a technique used in solar inverters to optimize power extraction from photovoltaic(PV) panels. By adjusting the electrical operating point, MPPT maximizes energy efficiency.",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [

                { text: "DSP Baded Fullly digital Design", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Programmable Solar Priority mode ", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "User friendly LCS + LED Display", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Intelligent battery charge management", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Active MPPT control system", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Synchronous load transfer", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "High frequency PWM inverter", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Soft start facility", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Multiphase interleaved MPPT", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },

            ],


        },



    ]




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


                            </div>

                        </div>


                    ))

                }

            </section>




        </>



    )






}
