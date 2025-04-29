import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Clients() {


    const clients = [
        {
            name: "MR. IVAN SAHA",
            title: "Chief Executive Officer (KMP)",
            img: "https://img.freepik.com/free-vector/betrayal-business-concept-illustration_114360-14885.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
        },
        {
            name: "MR. K.K. MASKARA",
            title: "Whole-Time Director & President - Corporate (KMP)",
            img: "https://img.freepik.com/free-vector/sponsor-concept-illustration_114360-6674.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
        },
        {
            name: "MS. NEHA AGRAWAL",
            title: "Whole-Time Director and VP - Corporate Strategy (KMP)",
            img: "https://img.freepik.com/free-vector/new-employee-concept-illustration_114360-8899.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
        },
        {
            name: "MR. NARAYAN LODHA",
            title: "Senior VP & Chief Finance Officer (KMP)",
            img: "https://img.freepik.com/free-vector/business-deal-concept-illustration_114360-1535.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
        },
    ];


    const responsive = {
        superLarge: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        large: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        medium: {
            breakpoint: { max: 768, min: 464 },
            items: 1,
        },
        small: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (



        <>


            <section className="py-10">


                <div className="w-full max-w-screen-xl mx-auto pb-4 pt-3">
                    <h2 className="text-center text-4xl mb-4 text-gray-800 font-bold" data-aos="fade-up" data-aos-duration="600">Our Clients</h2>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        className="carousel"                 
                        transitionDuration={500}
                    >
                        {clients.map((client, index) => (
                            <div key={index} className="flex flex-col items-center p-4">
                                <img
                                    src={client.img}
                                    alt={client.name}
                                    className="w-36 h-36 rounded-full object-cover mb-2"
                                />
                                <h3 className="text-lg mt-2">{client.name}</h3>
                                <p className="text-sm text-center text-gray-600">{client.title}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>




            </section>



        </>





    )





}
