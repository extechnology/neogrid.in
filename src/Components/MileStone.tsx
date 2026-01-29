import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function MileStone() {

    // Slider Responsive
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }


    return (


        <>


            <section className="py-5 border-t">

                <h3 className="text-[#6bac15] text-3xl font-bold sm:text-4xl text-center mb-5" data-aos="fade-up" data-aos-duration="600">
                    OUR MILE STONE PROJECTS
                </h3>


                <Carousel responsive={responsive} className="max-w-screen-xl mx-auto md:px-8 py-10">


                    <div className="">

                        <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/PU/BM/SZ/130829751/110-w-v-guard-solar-panels-500x500.jpg"  alt="" />


                    </div>


                    <div className="">

                        <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/PU/BM/SZ/130829751/110-w-v-guard-solar-panels-500x500.jpg"  alt="" />


                    </div>


                    <div className="">

                        <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/PU/BM/SZ/130829751/110-w-v-guard-solar-panels-500x500.jpg"  alt="" />


                    </div>


                    <div className="">

                        <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/PU/BM/SZ/130829751/110-w-v-guard-solar-panels-500x500.jpg"  alt="" />


                    </div>


                </Carousel>


            </section>




        </>





    )



}
