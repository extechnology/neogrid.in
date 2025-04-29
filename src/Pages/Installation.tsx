import ServiceOverView from "../Components/Installation/ServiceOverView";
import BenefitsSection from "../Components/Installation/BenefitsSection";
import ProjectGallery from "../Components/Installation/ProjectGallery";
import InstallContact from "../Components/Installation/InstallContact";
import TrendingSlider from "../Components/Installation/TrendingSlider";

export default function Installation() {


    window.scrollTo({ top: 0, behavior: 'smooth', });

    return (



        <>


            <section className="py-20 w-full">

                <div>

                    <ServiceOverView />

                </div>


                <div>

                    <BenefitsSection />

                </div>

                <div>

                    <ProjectGallery />

                </div>


                <div>

                    <InstallContact />

                </div>


                <div>

                    <TrendingSlider />

                </div>



            </section>




        </>





    )





}
