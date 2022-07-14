import React from 'react'

function Filter({ activateSearch }) {
    return (
        <div className='posts mt-8'>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li
                        className={`glide__slide h-auto pb-12 xl:pb-16" }`}
                    >
                        <div className="rounded-lg shadow-sm mb-1"
                            onClick={() => activateSearch("date")}
                        >
                            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden hover:shadow-lg ">
                                <div className="px-1 pt-2 pb-3 text-center relative z-10">
                                    <h4 className="text-sm uppercase text-gray-500 leading-tight">  DATE</h4>
                                    {/* <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">11,427</h3>
                                    <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p> */}
                                </div>
                            </div>
                        </div>

                    </li>

                    <li
                        className={`glide__slide h-auto pb-12 xl:pb-16" }`}
                    >

                        <div className="rounded-lg shadow-sm mb-1"
                            onClick={() => activateSearch("name")}
                        >
                            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden hover:shadow-lg ">
                                <div className="px-1 pt-2 pb-3 text-center relative z-10">
                                    <h4 className="text-sm uppercase text-gray-500 leading-tight"> NAME</h4>
                                    {/* <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">11,427</h3>
                                    <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p> */}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li

                        className={`glide__slide h-auto pb-12 xl:pb-16" }`}
                    >

                        <div className="rounded-lg shadow-sm mb-1"
                            onClick={() => activateSearch("type")}
                        >
                            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden hover:shadow-lg ">
                                <div className="px-1 pt-2 pb-3 text-center relative z-10">
                                    <h4 className="text-sm uppercase text-gray-500 leading-tight">TYPE</h4>
                                    {/* <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">11,427</h3>
                                    <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p> */}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li

                        className={`glide__slide h-auto  pb-12 xl:pb-16" }`}
                    >

                        <div className="rounded-lg shadow-sm mb-1"
                            onClick={() => activateSearch("amount")}
                        >
                            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden hover:shadow-lg ">
                                <div className="px-1 pt-2 pb-3 text-center relative z-10">
                                    <h4 className="text-sm uppercase text-gray-500 leading-tight">AMOUNT</h4>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li

                        className={`glide__slide h-auto pb-12 xl:pb-16" }`}
                    >
                        <div className="rounded-lg shadow-sm mb-1"
                            onClick={() => activateSearch("status")}
                        >
                            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden hover:shadow-lg ">
                                <div className="px-1 pt-2 pb-3 text-center relative z-10">
                                    <h4 className="text-sm uppercase text-gray-500 leading-tight">STATUS</h4>
                                    {/* <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">11,427</h3>
                                    <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p> */}
                                </div>
                            </div>
                        </div>
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Filter