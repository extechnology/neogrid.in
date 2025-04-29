

export default function BenefitsSection() {



    const deliverables = [
        {
            id: 1,
            text: "Fast ROI",
            text2:
                "Quick payback periods offer substantial financial returns over time.",
            icon: "https://cdn-icons-png.flaticon.com/128/17328/17328217.png",
        },
        {
            id: 2,
            text: "Cost Savings",
            text2:
                "Significantly reduces electricity bills for both homes and businesses.",
            icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png",
        },
        {
            id: 3,
            text: "Sustainability",
            text2:
                "Provides a clean, renewable energy source, reducing carbon footprints.",
            icon: "https://cdn-icons-png.flaticon.com/128/1598/1598196.png",
        },
        {
            id: 4,
            text: "Energy Independence",
            text2:
                "Provides a clean, renewable energy source, reducing carbon footprints.",
            icon: "https://cdn-icons-png.flaticon.com/128/17306/17306508.png",
        },
        {
            id: 5,
            text: "Custom Solutions",
            text2: "Tailored system designs maximize efficiency and performance.",
            icon: "https://cdn-icons-png.flaticon.com/128/3201/3201757.png",
        },
        {
            id: 6,
            text: "Increased Property Value",
            text2: "Solar installations enhance property resale value.",
            icon: "https://cdn-icons-png.flaticon.com/128/11184/11184961.png",
        },
        {
            id: 7,
            text: "Government Incentives",
            text2: "Access to rebates and tax credits, lowering upfront costs.",
            icon: "https://cdn-icons-png.flaticon.com/128/4116/4116431.png",
        },
        {
            id: 8,
            text: "Low Maintenance",
            text2: "Minimal upkeep required for solar installations.",
            icon: "https://cdn-icons-png.flaticon.com/128/2778/2778802.png",
        },
        {
            id: 9,
            text: "Reliable Technology",
            text2: "High-quality components ensure long-term energy generation.",
            icon: "https://cdn-icons-png.flaticon.com/128/4365/4365271.png",
        },
    ];



    return (


        <>


            <section>


                <div className="container mx-auto py-5 px-10">

                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 w-full flex items-center" data-aos="zoom-in" data-aos-duration="600">
                            <h2 className="benefits-title  font-bold text-center text-2xl m-auto">
                                The Caliber of Neogrid Projects and Installation
                            </h2>
                        </div>
                        <div className="lg:w-2/3 w-full" data-aos="zoom-in" data-aos-duration="600">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {deliverables.map((deliverable) => (
                                    <div key={deliverable.id} className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="600">
                                        <div className="icon-container p-3 flex flex-col justify-center items-center">
                                            <div className="benefit-img text-center">
                                                <img
                                                    src={deliverable.icon}
                                                    alt={deliverable.text}
                                                    className="w-16 h-16"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="overlay-texts text-center">
                                                <h5 className="font-bold pb-1">{deliverable.text}</h5>
                                                <p>{deliverable.text2}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </section>


        </>






    )




}
