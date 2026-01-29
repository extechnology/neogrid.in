import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function Header() {



    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



    return (



        <>


            <section className='bg-green-500'>

                <header className="fixed inset-x-0 top-0 z-50 bg-neutral-50 shadow-md">

                    <nav aria-label="Global" className="flex items-center justify-between p-2 lg:px-[5rem] header-xl">

                        <div className="flex lg:flex-1">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <img
                                    alt="nav-logo"
                                    src="/neo grid logo-01.png"
                                    loading="lazy"
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>

                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>


                        <div className="hidden lg:flex lg:gap-x-10">

                            <div className="relative">

                                <Link to='/' className="text-base font-medium leading-6 text-gray-900 hover:text-green-500">Home</Link>

                            </div>


                            <div className="relative group">

                                <a className="cursor-pointer text-base font-medium leading-6 text-gray-900 hover:text-green-500">Services</a>

                                {/* Dropdown Menu */}
                                <div
                                    className="absolute top-3 left-[-3rem] mt-2 w-64 bg-neutral-50 rounded-lg hidden transform scale-95 transition duration-300 ease-in-out
                                     group-hover:block group-hover:scale-100"
                                >
                                    <ul className="py-2">

                                        <Link to="/consultation">
                                            <li className="px-4 py-2 hover:bg-green-200">
                                                Solar Energy Consultation
                                            </li>
                                        </Link>

                                        <Link to="/installation">
                                            <li className="px-4 py-2 hover:bg-green-200">
                                                Project & Installation
                                            </li>
                                        </Link>

                                    </ul>


                                </div>

                            </div>





                            <div className="relative group">

                                <a className="cursor-pointer text-base font-medium leading-6 text-gray-900 hover:text-green-500">Products</a>

                                {/* Dropdown Menu */}
                                <div
                                    className="absolute top-3 left-[-3rem] mt-2 w-64 bg-neutral-50 rounded-lg hidden transform scale-95 transition duration-300 ease-in-out
                                     group-hover:block group-hover:scale-100"
                                >
                                    <ul className="py-2">

                                        <Link to="/solarpannel">
                                            <li className="px-4 py-2 hover:bg-green-200">
                                                Solar Panel
                                            </li>
                                        </Link>

                                        <Link to="/gridinteractive">
                                            <li className="px-4 py-2 hover:bg-green-200">
                                                Grid Interactive Inverter
                                            </li>
                                        </Link>

                                        <Link to="/solarpcu">
                                            <li className="px-4 py-2 hover:bg-green-200">
                                                Solar PCU
                                            </li>
                                        </Link>

                                        <Link to="/solarbatteries">
                                            <li className="px-4 py-2 hover:bg-green-200">
                                                Solar Batteries
                                            </li>
                                        </Link>

                                        <Link to="/mppt">
                                            <li className="px-4 py-2 hover:bg-green-200">
                                               MPPT
                                            </li>
                                        </Link>

                                    </ul>


                                </div>

                            </div>


                            <div className="relative">

                                <Link to='/projectgallery' className="text-base font-medium leading-6 text-gray-900 hover:text-green-500">Project Gallery</Link>

                            </div>

                            <div className="relative">

                                <Link to='/contact' className="text-base font-medium leading-6 text-gray-900 hover:text-green-500">Contact Us</Link>

                            </div>


                        </div>

                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <div className=" max-w-sm min-w-[200px]">
                                <div className="relative">
                                    <input type="text" className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-black text-black text-sm border border-black rounded-md transition duration-300 ease focus:outline-none focus:border-black hover:border-black shadow-sm focus:shadow" placeholder="Search here..." />


                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 font-medium absolute w-5 h-5 top-2.5 right-2.5 text-black">
                                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </nav>


                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-50" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <img
                                        alt="nav-logo"
                                        src="/neo grid logo-01.png"
                                        className="h-8 w-auto"
                                        loading='lazy'
                                    />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">

                                        <Link to={'/'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100" >Home</Link>
                                        <Link to={'/consultation'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100" >Solar Energy consultation</Link>
                                        <Link to={'/installation'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100" >Projects & Installation</Link>
                                        <Link to={'/solarpannel'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100" >Solar Panel</Link>
                                        <Link to={'/gridinteractive'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100" >Grid Interactive Inverter</Link>
                                        <Link to={'/solarpcu'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100" >Solar PCU</Link>
                                        <Link to={'/preview'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100" >Solar Batteries</Link>
                                        <Link to={'/'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100" >Project Gallery</Link>
                                        <Link to={'/contact'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-100" >Contact Us</Link>

                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>



                </header>

            </section >

        </>




    )




}

export default Header