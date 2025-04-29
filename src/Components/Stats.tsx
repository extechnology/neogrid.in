import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Stats() {


    const stats = [
        {
            data: 218,
            title: "Projects Completed"
        },
        {
            data: 1400,
            title: "Happy Customer"
        },
        {
            data: 1300,
            title: "Products Delivered"
        },

    ]


    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.2, 
    });

    return (



        <>



            <section className='border-t'>


                <section className="py-14">

                    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up" data-aos-duration="600" >
                            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                Our customers are always happy
                            </h3>

                        </div>
                        <div className="mt-12" data-aos="fade-up" data-aos-duration="900" ref={ref}>
                            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                                {
                                    stats.map((item, idx) => (
                                        <li key={idx} className="text-center px-12 md:px-16">
                                            <h4 className="text-4xl text-green-500 font-semibold">
                                                {inView ? <CountUp end={item.data} duration={4} /> : '0'}
                                                +
                                            </h4>
                                            
                                            <p className="mt-3 font-medium">{item.title}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </section>


            </section>





        </>





    )




}

export default Stats