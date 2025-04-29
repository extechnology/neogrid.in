import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,

} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { AllProducts } from '../Hooks/AllProducts'
import Filtertext from '../Hooks/FilterText'




export default function Filter() {

    interface ProductInterface {
        category: string;
        description: string;
        id: Number;
        image: string;
        name: string;
        series: string;
    }


    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)


    const [ProductsData, SetProductsData] = useState<ProductInterface[]>([])


    // All products Data
    const { data, isLoading, isError, isSuccess } = AllProducts()


    // Filter text update
    const { UpdateKey, FilterData } = Filtertext()


    interface Option {
        value: string;
        label: string;
    }

    interface Section {
        id: string;
        name: string;
        options: Option[];
    }

    interface Item {
        series: string;

    }



    const filters: Section[] = [

        {
            id: 'category',
            name: 'Category',
            options: [
                { value: 'E LAN SHINE TOPCON SERIES', label: 'E LAN SHINE TOPCON SERIES' },
                { value: 'MONO PERC HALF-CUT PANEL', label: 'MONO PERC HALF-CUT PANEL' },
                { value: 'ELAN SHINE SERIES', label: 'ELAN SHINE SERIES' },
                { value: 'TERNAL SHINE SERIES', label: 'TERNAL SHINE SERIES' },
                { value: 'GRID INTERACTIVE INVERTER (GI)', label: 'GRID INTERACTIVE INVERTER (GI)' },
                { value: 'GRID INTERACTIVE HYBRID INVERTER (GIH)', label: 'GRID INTERACTIVE HYBRID INVERTER (GIH)' },
                { value: '3 PHASE GRID INTERACTIVE INVERTER', label: '3 PHASE GRID INTERACTIVE INVERTER' },
                { value: 'INBUILT SOLAR PCU', label: 'INBUILT SOLAR PCU' },
                { value: 'HEAVY DUTY INVERTER', label: 'HEAVY DUTY INVERTER' },
                { value: 'LI-ON', label: 'LI-ON' },
                { value: 'DAY STAR C10 240AH I 220AH', label: 'DAY STAR C10 240AH I 220AH' },
                { value: 'DAY STAR C10 250AH', label: 'DAY STAR C10 250AH' },
                { value: 'DAY STAR C20300AH', label: 'DAY STAR C20300AH' },
                { value: 'EXTREME G C10 165AH I 220AH', label: 'EXTREME G C10 165AH I 220AH' },
                { value: 'AUTO TRACING MPPT', label: 'AUTO TRACING MPPT' },
            ],
        },

    ]


    // filtering
    useEffect(() => {

        if (!data || isLoading || isError) return;


        const lowerCaseFilterData = FilterData?.map(filter => filter.toUpperCase());

        const filteredData = data.filter((item: Item) => {

            const categoryMatch = lowerCaseFilterData?.length === 0 || lowerCaseFilterData?.includes(item.series.toUpperCase())

            return categoryMatch

        })

        SetProductsData(filteredData)


    }, [FilterData, isSuccess, data])



    window.scrollTo({ top: 0, behavior: 'smooth', });







    return (




        <section className='py-5'>


            <div className="bg-white">


                <div>

                    {/* Mobile filter dialog */}
                    <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                        <DialogBackdrop
                            transition
                            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                        />

                        <div className="fixed inset-0 z-40 flex">
                            <DialogPanel
                                transition
                                className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-28 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                            >
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                    <button
                                        type="button"
                                        onClick={() => setMobileFiltersOpen(false)}
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">


                                    {filters.map((section) => (
                                        <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6" defaultOpen={true}>
                                            <h3 className="-mx-2 -my-3 flow-root">
                                                <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                                        <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel className="pt-6">
                                                <div className="space-y-6">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex items-center">
                                                            <input
                                                                value={option.value}
                                                                onChange={(e) => { UpdateKey(e.target.value) }}
                                                                checked={FilterData?.includes(option.value)}
                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <label
                                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ))}
                                </form>
                            </DialogPanel>
                        </div>
                    </Dialog>




                    <main className="w-full px-6 sm:px-6 lg:px-10">


                        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                            <h1 className="sm:text-4xl text-2xl font-bold tracking-tight text-gray-900">{ProductsData.length} Products Found</h1>

                            <div className="flex items-center">

                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(true)}
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                >
                                    <span className="sr-only">Filters</span>
                                    <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                                </button>

                            </div>
                        </div>





                        <section aria-labelledby="products-heading" className="pb-24 pt-6">


                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                                {/* Filters */}
                                <form className="hidden lg:block">



                                    {filters.map((section) => (
                                        <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6" defaultOpen={true}>


                                            <h3 className="-my-3 flow-root">
                                                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-xl text-black hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        <PlusIcon aria-hidden="true" className="h-7 w-7 group-data-[open]:hidden" />
                                                        <MinusIcon aria-hidden="true" className="h-7 w-7 [.group:not([data-open])_&]:hidden" />
                                                    </span>
                                                </DisclosureButton>
                                            </h3>


                                            <DisclosurePanel className="pt-6">
                                                <div className="space-y-4">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div key={option.value} className="flex items-center">
                                                            <input
                                                                value={option.value}
                                                                onChange={(e) => { UpdateKey(e.target.value) }}
                                                                checked={FilterData?.includes(option.value)}
                                                                id={`filter-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                                                            />
                                                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600 font-medium">
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DisclosurePanel>


                                        </Disclosure>
                                    ))}
                                </form>



                                {/* Product grid */}
                                <div className="lg:col-span-3">

                                    <div className="bg-white">

                                        <div className="mx-auto w-full px-4 py-1 sm:px-6 lg:max-w-7xl">




                                            {

                                                isLoading || isError ?

                                                    <div className='flex flex-col items-center justify-center'>

                                                        <iframe src="https://lottie.host/embed/c1ed3090-68b7-490c-acdb-8fe10821781c/bcqIEakz2z.json" width={400} height={300}></iframe>

                                                    </div>

                                                    :

                                                    ProductsData.length > 0 ?

                                                        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

                                                            {ProductsData.map((item, index) => (

                                                                <div key={index} className="relative">

                                                                    <a href="https://wa.me/yourphonenumber?text=Hello%20there!">
                                                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80">



                                                                            <img
                                                                                alt="img"
                                                                                src={item.image}
                                                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                                            />


                                                                        </div>
                                                                    </a>

                                                                    <div className="mt-4 flex flex-col justify-between">

                                                                        <div>

                                                                            <h3 className="text-xl font-medium text-gray-700 mb-3">{item.name}</h3>
                                                                            {/* <p className="mt-1 mb-2 text-sm text-gray-500">{item.description}</p> */}

                                                                        </div>

                                                                        <a href="https://wa.me/yourphonenumber?text=Hello%20there!" className='w-full'>

                                                                            <button className='bg-gray-900 hover:bg-white hover:text-black border-black border transition ease-in-out duration-400 text-white font-bold py-2 px-4 rounded w-full'>Enquiry Now</button>

                                                                        </a>


                                                                    </div>

                                                                </div>


                                                            ))}

                                                        </div>

                                                        :

                                                        <div className='flex flex-col items-center justify-center'>

                                                            <iframe src="https://lottie.host/embed/7a9e5e35-0b48-41e5-bc85-26ff410bd08b/kYYpIAmemW.json" height={300} width={400}></iframe>
                                                            <h3 className='font-medium text-2xl'>No Products Found <i className="fa-solid fa-ban text-red-700"></i></h3>

                                                        </div>

                                            }


                                        </div>




                                    </div>


                                </div>



                            </div>

                        </section>
                    </main>
                </div>
            </div>

        </section>





    )




}
