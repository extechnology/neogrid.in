import { Link } from "react-router-dom";


const ProductCard: React.FC<ProductCardProps> = ({ bgColor, title, description, imageSrc }) => {
    return (
        <div className={`p-6 rounded-lg ${bgColor} flex justify-between items-center`} data-aos="zoom-in" data-aos-duration="600" >
            <div>
                <h2 className="text-white text-2xl font-bold">{title}</h2>
                <p className="text-white">{description}</p>
                <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-lg font-bold">Browse</button>
            </div>
            <img src={imageSrc} alt={title} className="md:w-52 md:h-52 w-28 h-28" />
        </div>
    );
};

interface ProductCardProps {
    bgColor: string;
    title: string;
    description: string;
    imageSrc: string;
}

interface Product {
    bgColor: string;
    title: string;
    description: string;
    imageSrc: string;
    to:string;
}

const ProductGrid = () => {

    const products: Product[] = [
        {
            bgColor: 'bg-blue-500',
            title: 'N-Type Solar Panels',
            to:"/solarpannel",
            description: 'Brighten your home with the Sun',
            imageSrc: 'https://www.nexussolarenergy.in/wp-content/uploads/2023/09/solar-panel.png',
        },
        {
            bgColor: 'bg-yellow-500',
            title: 'Grid Interactive Inverter',
            to:"/gridinteractive",
            description: 'Maximize your savings with our efficient inverters',
            imageSrc: 'https://www.nexussolarenergy.in/wp-content/uploads/2023/09/solar-pcu.png',
        },
        {
            bgColor: 'bg-pink-500',
            title: 'Solar Batteries',
            to:"/solarbatteries",
            description: 'High quality solar batteries for your solar PV systems',
            imageSrc: 'https://www.nexussolarenergy.in/wp-content/uploads/2023/09/solar-battery.png',
        },
        {
            bgColor: 'bg-green-500',
            title: 'Solar PCU',
            to:"/solarpcu",
            description: 'An advanced PCU solution for both on-grid and off-grid solar systems',
            imageSrc: 'https://www.nexussolarenergy.in/wp-content/uploads/2023/09/ac.png',
        },
    ];

    return (

        <section className="bg-white py-2  sm:py-20 border-t">


            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">




                <p data-aos="fade-up" data-aos-duration="600" className="mx-auto mt-2 w-full sm:max-w-lg text-center sm:text-pretty text-4xl font-medium tracking-tight text-[#6bac15] sm:text-5xl">
                    Why Millions Trusted on NeoGrid
                </p>

                <p className="mt-2  text-base text-gray-600 text-justify sm:text-center" data-aos="fade-up" data-aos-duration="900">
                    Millions trust NeoGrid for solar power solutions because of their commitment to quality, expertise, and customer satisfaction. Offering valuable consultation, professional installation, and reliable solar products, we ensure optimal performance and energy efficiency. Our proven track record and dedication to sustainable energy make them a trusted choice for solar power.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 md:p-8">
                    {products.map((product, index) => (
                        <Link  key={index} to={product.to}>

                            <ProductCard
                               
                                bgColor={product.bgColor}
                                title={product.title}
                                description={product.description}
                                imageSrc={product.imageSrc}

                            />

                        </Link>

                    ))}
                </div>

            </div>


        </section>

    );
};

export default ProductGrid;
