import { Link } from "react-router-dom";


export default function InstallContact() {



    return (



        <section>


            <div className="max-w-screen-xl mx-auto py-5 text-center" data-aos="zoom-in" data-aos-duration="600">
                <div className="py-4">
                    <h2 className="font-bold text-2xl md:text-3xl">
                        Ensure Your Power Backup with <br /> Trusted Installation
                    </h2>
                </div>
                <div className="flex justify-center gap-3">

                    <Link to={'/contact'}>

                        <button className="bg-green-600 rounded-3xl text-white text-lg font-bold py-2 px-4 hover:bg-green-700 transition duration-200">
                            Contact Now
                        </button>

                    </Link>

                    <button className="bg-blue-600 rounded-3xl text-white text-lg font-bold py-2 px-4 hover:bg-blue-500 transition duration-200">
                        Contact with the Technical Team
                    </button>
                </div>
            </div>



        </section>




    )




}
