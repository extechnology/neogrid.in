import { useForm } from "react-hook-form";
import { ContactPost } from '../Service/AllApi';
import { toast } from "sonner";

export default function Contact() {


    // Form Types
    type Inputs = {
        name: string,
        email: string,
        phone: string,
        interested: string,
        message: string,
    }


    // Hook Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();




    // Submit From 
    const HandleContact = async (data: any) => {

        try {

            if (data) {

                const reqheader = {

                    "Content-Type": "multipart/form-data"

                }


                const formdata = new FormData()

                formdata.append("name", data.name)
                formdata.append("email", data.email)
                formdata.append("contact", data.phone)
                formdata.append("interested", data.interested)
                formdata.append("message", data.message)


                const res = await ContactPost(data, reqheader)



                if (res.status >= 200 && res.status <= 300) {


                    toast.success("We Will Get Back To You Soon!", { duration: 5000 })

                    reset()


                } else {

                    console.log(res)

                    toast.warning("Something Went Wrong!")


                }


            }

        }
        catch (err) {

            console.log(err);
            toast.warning("Something Went Wrong!")

        }

    }


    return (



        <>



            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">


                <div
                    aria-hidden="true"
                    className="absolute left-28 inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[75.1875rem]"
                    />
                </div>






                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Get in Touch</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        For Enquiry and Support Freely Contact Us.
                    </p>
                </div>


                <div className='grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 mx-auto  mt-16 max-w-5xl sm:mt-11 isolate'>


                    <div data-aos="zoom-in" className="flex  flex-col justify-center items-center" data-aos-duration="600">

                        <h2 className="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Corporate Office <i className="ms-1 fa-solid fa-building"></i></h2>

                        <p className="mt-2 text-[1rem] leading-8 text-gray-600 font-medium">
                            NeoGrid
                        </p>

                        <p className="text-balance text-center text-[1rem] leading-8 text-gray-600 font-medium">
                        MM 11/505-C, Mullanpara, Manjeri, Kerala, India 676121

                        </p>

                        <p className="text-balance text-[1rem] leading-8 text-gray-600 font-medium">
                            <span className='font-bold'>Contact No:</span> <a href="tel:+919846141500" target="_blank" className='hover:text-indigo-600'>+91 9846141500</a>
                        </p>

                        <p className="text-balance text-[1rem] leading-8 text-gray-600 font-medium">
                            <span className='font-bold'>Email :</span> <a href="mailto:info@neogrid.in" target="_blank" className="text-gray-600 hover:text-indigo-600 ">info@neogrid.in</a>
                        </p>

                    </div>

                    <div className='mt-6 sm:mt-0 flex  flex-col justify-center items-center' data-aos="zoom-in" data-aos-duration="600" >

                        <h2 className="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Registered Office <i className="fa-solid fa-building-circle-check ms-1"></i></h2>

                        <p className="mt-2 text-[1rem] leading-8 text-gray-600 font-medium">
                            NeoGrid
                        </p>

                        <p className="text-balance text-center text-[1rem] leading-8 text-gray-600 font-medium">
                            Second Floor, 34/453-A, Global Tower, Vanchikulam Road, Poothole,
                            Keral – 680004
                        </p>

                        <p className="text-balance text-[1rem] leading-8 text-gray-600 font-medium">
                            <span className='font-bold'>Contact No:</span> <a href="tel:+919846141500" target="_blank" className='hover:text-indigo-600'>+91 9846141500</a>
                        </p>

                        <p className="text-balance text-[1rem] leading-8 text-gray-600 font-medium">
                            <span className='font-bold'>Email :</span>  <a href="mailto:info@neogrid.in" target="_blank" className="text-gray-600 hover:text-indigo-600 ">info@neogrid.in</a>
                        </p>

                    </div>

                    <div className='mt-6 sm:mt-3 flex  flex-col justify-center items-center' data-aos="zoom-in" data-aos-duration="600">

                        <h2 className="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl mb-3">Support Center <i className="fa-solid fa-headset ms-1"></i></h2>

                        <p className="text-balance text-[1rem] leading-8 text-gray-600 font-medium">
                            <span className='font-bold'>Contact No:</span> <a href="tel:+919846151900" target="_blank" className='hover:text-indigo-600'>+91 9846151900</a>
                        </p>

                        <p className="text-balance text-[1rem] leading-8 text-gray-600 font-medium">
                            <span className='font-bold'>Email :</span>  <a href="mailto:support@neogrid.in" target="_blank" className="text-gray-600 hover:text-indigo-600 ">support@neogrid.in</a>
                        </p>

                    </div>


                    <div className='mt-6 sm:mt-3 flex  flex-col justify-center items-center' data-aos="zoom-in" data-aos-duration="600">

                        <h2 className="text-balance text-center text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl mb-3">For Franchise and Business Partnership  <i className="fa-regular fa-handshake ms-1"></i></h2>

                        <p className="text-balance text-[1rem]  leading-8 text-gray-600 font-medium">
                            <span className='font-bold'>Contact No:</span> <a href="tel:+919846151800" target="_blank" className='hover:text-indigo-600'>+91 9846151800</a>
                        </p>

                        <p className="text-balance text-[1rem] leading-8 text-gray-600 font-medium">
                            <span className='font-bold'>Email :</span>  <a href="mailto:franchaise@neogrid.in" target="_blank" className="text-gray-600 hover:text-indigo-600 ">franchaise@neogrid.in</a>
                        </p>

                    </div>


                </div>




                <form className="mx-auto mt-16 max-w-5xl sm:mt-16 isol" onSubmit={handleSubmit(HandleContact)}>

                    <p className="mb-5 text-2xl leading-8 text-gray-600 text-center font-medium">
                        For Enquiry and Support Freely Contact Us.
                    </p>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                        <div data-aos="fade-up" data-aos-duration="600">
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="given-name"
                                    {...register('name', { required: "Name is required" })}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                            </div>
                        </div>

                        <div className="" data-aos="fade-up" data-aos-duration="600">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter a valid email address" }
                                    })}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="" data-aos="fade-up" data-aos-duration="600">
                            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="phone"
                                    maxLength={10}
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Enter a valid 10-digit phone number"
                                        }
                                    })}
                                    type="tel'"
                                    autoComplete="mobile tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                            </div>
                        </div>



                        <div className="" data-aos="fade-up" data-aos-duration="600">
                            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                                Interested for
                            </label>
                            <div className="mt-2.5">

                                <select {...register("interested", { required: "Select one Option" })} id="" className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                    <option value="">---------</option>
                                    <option value="Franchise">Franchise</option>
                                    <option value="Dealership">Dealership</option>
                                    <option value="Product Purchase">Product Purchase</option>

                                </select>

                                {errors.interested && <p className="text-red-500 text-sm">{errors.interested.message}</p>}

                            </div>
                        </div>


                        <div className="sm:col-span-2" data-aos="fade-up" data-aos-duration="600">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                    {...register("message", { required: "Enter Your Message here" })}

                                />

                                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

                            </div>
                        </div>

                    </div>

                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let's talk
                        </button>
                    </div>


                </form>
            </div>


        </>




    )




}
