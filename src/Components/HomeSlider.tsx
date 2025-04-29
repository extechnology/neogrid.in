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
                            src="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg"
                            alt="Banner 1"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg"
                            alt="Banner 2"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg"
                            alt="Banner 3"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                </Swiper>

            </section>




        </>



    )




}

export default HomeSlider