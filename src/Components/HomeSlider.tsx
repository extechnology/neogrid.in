import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


function HomeSlider() {


    return (



        <>



            <section>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000, // Time in ms between transitions
                        disableOnInteraction: false, // Continue autoplay after user interactions
                    }}
                    className="w-full h-full lg:h-[100vh]" // Adjust height as needed
                >
                    <SwiperSlide>
                        <img
                            src="/Home-slider-1.webp"
                            alt="Banner 1"
                            loading='lazy'
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src="/Home-slider-2.webp"
                            alt="Banner 2"
                            loading='lazy'
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src="/Home-slider-3.webp"
                            alt="Banner 3"
                            loading='lazy'
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                </Swiper>

            </section>




        </>



    )




}

export default HomeSlider