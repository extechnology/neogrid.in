import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 

function TrendingSlider() {


    const cards = [
        {
            title: "Heading 1",
            image:
                "https://img.freepik.com/free-vector/memory-storage-concept-illustration_114360-3888.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
        },
        {
            title: "Heading 2",
            image:
                "https://img.freepik.com/free-vector/data-processing-concept-illustration_114360-4376.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
        },
        {
            title: "Heading 3",
            image:
                "https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149247164.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
        },
        {
            title: "Heading 4",
            image:
                "https://img.freepik.com/free-vector/backup-server-abstract-concept-illustration_335657-3709.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
        },
        {
            title: "Heading 5",
            image:
                "https://img.freepik.com/free-vector/electricity-lighting-illustration-flat-style-with-character-electrician-with-wires-power-cabinet-vector-illustration_1284-53682.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
        },
        {
            title: "Heading 6",
            image:
                "https://img.freepik.com/free-vector/error-429-concept-illustration_114360-6603.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
        },
    ];


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (



        <>



            <section className="py-16" data-aos="fade-up" data-aos-duration="600">


                <div className="max-w-screen-xl mx-auto md:px-8 py-3">
                    <h2 className="slider-heading mb-3 text-center text-4xl  font-bold">Trending Products</h2>
                    <Carousel responsive={responsive} className="carousel" infinite={true}>
                        {cards.map((card, index) => (
                            <div className="card border-0 p-4" key={index}>
                                <img src={card.image} alt={card.title} className="rounded-lg mb-2" loading="lazy" />
                                <h3 className="fw-bold text-center">{card.title}</h3>
                            </div>
                        ))}
                    </Carousel>
                </div>


            </section>



        </>






    )





}

export default TrendingSlider