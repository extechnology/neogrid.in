import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function ProjectGallery() {


    const slides = [
        {
            image: "https://picsum.photos/600/500",
            title: "This is a title",
            description: "This is a description",

        },
        {
            image: "https://picsum.photos/600/500",
            title: "This is a second title",
            description: "This is a second description",

        },
        {
            image: "https://picsum.photos/600/500",
            title: "This is a third title",
            description: "This is a third description",

        },
        {
            image: "https://picsum.photos/600/500",
            title: "This is a fourth title",
            description: "This is a fourth description",

        },
       
    ]

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


            <section className="py-16">


                <div className="container mx-auto p-0">

                    <div className="gallary-head text-center pb-4" data-aos="fade-up" data-aos-duration="600">
                        <h2 className="font-bold text-3xl">Our Projects and Installations</h2>
                    </div>

                    <div className="flex justify-center" data-aos="fade-up" data-aos-duration="900">

                        <Carousel responsive={responsive} className="max-w-screen-xl mx-auto md:px-8">
                            {slides.map((card, index) => (
                                <div className="card border-0 p-4" key={index}>
                                    <img src={card.image} alt={card.title} className="rounded-lg mb-2" loading="lazy" />
                                    <h3 className="fw-bold text-center">{card.title}</h3>
                                </div>
                            ))}



                        </Carousel>

                    </div>


                </div>



            </section>




        </>





    )






}
