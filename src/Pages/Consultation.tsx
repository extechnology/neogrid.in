import SolarEnergy from "../Components/Consultation/SolarEnergy";
import ConsultationFlow from "../Components/Consultation/ConsultationFlow";
import Clients from "../Components/Consultation/Clients";
import ConfirmSystem from "../Components/Consultation/ConfirmSystem";

export default function Consultation() {


    window.scrollTo({ top: 0, behavior: 'smooth', });

    return (


        <>

            <section className="w-full py-14">


                <div>

                    <SolarEnergy />

                </div>

                <div>

                    <ConsultationFlow />

                </div>


                <div>

                    <Clients />

                </div>

                <div>

                    <ConfirmSystem />

                </div>


            </section>



        </>




    )





}
