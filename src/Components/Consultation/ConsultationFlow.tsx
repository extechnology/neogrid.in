

export default function ConsultationFlow() {


    const cardData = [
        {
            title: "Initial Site Assessment",
            description:
                "Understand the potential for solar installation at the location. During the first visit, our consultant assesses the property to gather details about roof space, shading, sunlight exposure, and orientation. This helps determine if the location suits solar panels and estimate potential energy output.",
            icon: "https://cdn-icons-png.flaticon.com/128/8901/8901485.png",
        },
        {
            title: "Energy Usage Evaluation",
            description:
                "Analyze current electricity usage to size the solar system appropriately. The consultant reviews electricity bills from the past 6-12 months to determine the average consumption. This step is essential to recommend the right system size to offset your electricity usage.",
            icon: "https://cdn-icons-png.flaticon.com/128/7822/7822727.png",
        },
        {
            title: "Technical Feasibility Study",
            description:
                "Confirm the technical aspects of the installation. This includes checking the condition of the roof, structural integrity, potential obstructions (e.g., trees or buildings), and electrical system compatibility. The consultant also assesses the angle and direction of the roof for optimal solar performance.",
            icon: "https://cdn-icons-png.flaticon.com/128/11515/11515286.png",
        },
        {
            title: "System Design Proposal",
            description:
                "Provide a detailed proposal based on on-site assessment and energy needs. After the assessment, the consultant presents a system design that includes the number of panels, inverters, mounting systems, and other equipment. The proposal also outlines costs, potential savings, and return on investment (ROI) estimates.",
            icon: "https://cdn-icons-png.flaticon.com/128/8046/8046634.png",
        },
        {
            title: "Permitting and Financing Consultation",
            description:
                "Guide the client through regulatory requirements and financing options. The consultant discusses necessary permits, grid connections, and any local regulations. They also explain financing options, including loans, leasing, or incentives (e.g., government subsidies), ensuring that the client understands their choices for funding the solar system installation.",
            icon: "https://cdn-icons-png.flaticon.com/128/781/781760.png",
        },
    ];


    return (




        <>



            <section>



                <div className="max-w-7xl mx-auto p-6">

                    <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="600">
                        <h2 className="text-3xl font-bold text-gray-800">Consultation Flow</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="zoom-in" data-aos-duration="600">
                        {cardData.map((card, index) => (
                            <div
                                className={`bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 ${index === 4 ? "md:col-span-2" : ""
                                    }`}
                                key={index}
                                data-aos="fade-up" data-aos-duration="600"
                            >
                                <div className="flex items-center space-x-4">
                                    <img src={card.icon} alt={card.title} className="w-12 h-12" />
                                    <h5 className="text-xl font-semibold text-gray-900">
                                        {card.title}
                                    </h5>
                                </div>
                                <p className="mt-4 text-gray-700">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>



            </section>



        </>


    )


}
