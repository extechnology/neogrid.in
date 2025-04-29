import { Link } from "react-router-dom"
import Filtertext from "../Hooks/FilterText";
export default function SolarPannel() {

    window.scrollTo({ top: 0, behavior: 'smooth', });


    // Update the filter text
    const { UpdateKey } = Filtertext()

    const Solar_pannel = [

        {

            category: "solarpanel",
            tittle: "Mono Perc Half-cut Panel",
            description: "Enhanced performance even in low light",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [
                { text: "Certified by IEC & Bis", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Superior Efficiency", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Designed for All Weather Condition", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" }
            ],
            solarcells: "72-144",
            v_range: "12V",
            w_range: "375W",
            warranty: "25Years",

        },
        {

            category: "solarpanel",
            tittle: "E LAN SHINE TOPCON SERIES",
            description: "N-type Dual Glass Modules ASB-M10-144-AAA (AAA=550-580) 144 Cells | 550-580 Wp | Gen-II",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [
                { text: "Up to 30% Additional Power Gain when compared with conventional P-type module", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "No LID Loss - Higher power generation", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Better Output In Low Irradiance-Higher power output even under low-light , environments like on cloudy or foggy days", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Better Temperature Coefficient-Higher power generation under higher ambient temperature conditions", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Bifocality Factor 80 ± 5 %", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" }
            ],
            maximum_power: "580 + WP",
            maximum_efficiency: "22.5%",
            power_tolerance: "0~+5W",
            warranty: "25 Years",

        },

        {

            category: "solarpanel",
            tittle: "E LAN SHINE TOPCON SERIES",
            description: "N-type Bifacial Transparent Backsheet Modules ASB-M10-144-AAA (AAA=550-580) 144 Cells | 550-580 Wp | Gen-II",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [
                { text: "Up to 30% Additional Power Gain when compared with conventional P-type module", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "No LID Loss - Higher power generation", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Better Output In Low Irradiance-Higher power output even under low-light , environments like on cloudy or foggy days", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Better Temperature Coefficient-Higher power generation under higher ambient temperature conditions", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Bifocality Factor 80 ± 5 %", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Delivers Reliable Performance Over Time • Full-automatic facility and industry-leading technology • Best-in-class durability and reliability", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
            ],
            maximum_power: "580 + WP",
            maximum_efficiency: "22.47%",
            power_tolerance: "0~+5W",
            warranty: "25 Years",

        },


        {

            category: "solarpanel",
            tittle: "ELAN SHINE SERIES",
            description: "Bifacial PV Modules with Dual Glass, MBB P-Type PERC Half-cut ASB-M10-144-AAA (AAA=520-545) 144 Cells | 520-545 Wp",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [
                { text: "MBB cell technology -excellent anti-microcracking performance with more balanced interior stress: grid pattern current path, lower cost", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Up to 70 ± 5% bifaciality Factor", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Longer Product life and performance -0.45% year over year degradation with 30 years warranty on power", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Least degradation for LID & LeTID", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Modules made with Gadoped wafer with Smart soldering", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Excellent PID Resistance", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
            ],


        },

        {

            category: "solarpanel",
            tittle: "ELAN SHINE SERIES",
            description: "Bifacial PV Modules with Transparent Backsheet, MBB P-Type PERC Half-cut ASB-M10-144-AAA (AAA=520-545) 144 Cells | 520-545 Wp",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [
                { text: "MBB cell technology -excellent anti-microcracking performance with more balanced interior stress: grid pattern current path, lower cost", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Up to 70 ± 5% bifaciality Factor", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Longer Product life and performance -0.45% year over year degradation with 30 years warranty on power", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Least degradation for LID & LeTID", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Modules made with Gadoped wafer with Smart soldering", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Excellent PID Resistance", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
            ],


        },

        {

            category: "solarpanel",
            tittle: "TERNAL SHINE SERIES",
            description: "Monofacial PV Modules MBB P-Type PERC Half-cut ASM-M10-144-AAA (AAA=520-545) 144 Cells | 520-545 Wp",
            image: "https://prag.global/wp-content/uploads/2018/12/2-PRAG-TF-EX-12-200-CB-e1649862795725.png",
            pdf: "",
            features: [
                { text: "MBB cell technology with 10BB, smart soldering", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "High module conversion efficiency upto 21.22%", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Excellent low light Performance", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Least degradation for LID & LeTID with Ga Doped wafer Technology", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Excellent anti-micro cracking performance with more balanced interior stress: grid pattern current path", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
                { text: "Excellent PID Resistance", icon: "https://cdn-icons-png.flaticon.com/128/11517/11517908.png" },
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
                                        <button className="bg-black ms-3  text-white hover:bg-white hover:text-black  hover:border-black py-2 px-6 rounded-full shadow-lg text-sm font-medium" >
                                            View All Variants <i className="fa-regular fa-eye ms-1"></i>
                                        </button>
                                    </Link>


                                    <button className="bg-black text-white hover:bg-white hover:text-black  hover:border-black py-2 px-6 rounded-full shadow-lg text-sm font-medium transition duration-200">
                                        Download Brochure <i className="fa-solid fa-download ms-1"></i>
                                    </button>

                                </div>

                                {/* Details */}
                                <div className="mt-6 text-white text-center grid sm:grid-cols-4 grid-cols-1 gap-y-3 gap-x-2">

                                    {
                                        item.solarcells &&

                                        <>

                                            <p>Solar Cells Per Unit: {item.solarcells}</p>
                                            <p>V-Range: {item.v_range}</p>
                                            <p>W-Range: {item.w_range}</p>
                                            <p>Warranty: {item.warranty}</p>

                                        </>
                                    }


                                    {

                                        item.maximum_power &&


                                        <>

                                            <p>Maximum Power Output: {item.maximum_power}</p>
                                            <p>Maximum Efficiency: {item.maximum_efficiency}</p>
                                            <p>Power Tolerance: {item.power_tolerance}</p>
                                            <p>Warranty: {item.warranty}</p>


                                        </>

                                    }


                                </div>


                            </div>
                        </div>


                    ))

                }

            </section>



        </>





    )





}
