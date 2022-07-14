import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationIcon, UserCircleIcon, SearchCircleIcon } from '@heroicons/react/outline';
import SelectFeild from './SelectFeild';

function Modal({ open, setOpen, searchFeild, GRAPHQLSEARCH, setinputSearchTerm, cancelButtonRef, inputSearchTerm }) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <div
                    className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div
                            className="inline-block align-bottom bg-white rounded-lg
   text-left 
overflow-hidden shadow-xl 
transform transition-all 
sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div
                                        className="mx-auto flex-shrink-0 flex items-center
       justify-center h-12 w-12 rounded-full bg-pink-100 sm:mx-0
        sm:h-10 sm:w-10"
                                    >
                                        <SearchCircleIcon className="h-6 w-6 text-pink-600" aria-hidden="true" />

                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg uppercase leading-6 font-medium text-gray-900">
                                            Filter Transactions With {searchFeild}
                                        </Dialog.Title>

                                        <div className="relative p-6 flex-auto">
                                            {
                                                searchFeild == "date" && (
                                                    <input id="date" type="date" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:shadow-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setinputSearchTerm(e.target.value)} name="task_date" />
                                                )
                                            }



                                            {
                                                searchFeild == "amount" && (
                                                    <form className='mt-3'>
                                                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                                        <div className="relative">
                                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlnsXlink="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                            </div>
                                                            <input type="number" onChange={(e) => setinputSearchTerm(e.target.value)} id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:shadow-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search For Amount..." required />
                                                            {/* <button type="submit" className="text-white shadow-2xl absolute right-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                                                        </div>
                                                    </form>
                                                )
                                            }

                                            {
                                                searchFeild == "name" && (
                                                    <form className='mt-3'>
                                                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                                        <div className="relative">
                                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlnsXlink="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                            </div>
                                                            <input type="search" onChange={(e) => setinputSearchTerm(e.target.value)} id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:shadow-2xl dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Transactions, Names..." required />
                                                            {/* <button type="submit" className="text-white shadow-2xl absolute right-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                                                        </div>
                                                    </form>
                                                )
                                            }


                                            {
                                                searchFeild == "type" && (
                                                    // <select id="type" onChange={(e) => setinputSearchTerm(e.target.value)} className="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    //     <option >Choose a type</option>
                                                    //     <option value="credit">Credit</option>
                                                    //     <option value="debit">Debit</option>
                                                    // </select>
                                                    <SelectFeild setinputSearchTerm={setinputSearchTerm} feilds={[{ name: 'click to select' }, { name: 'credit' }, { name: 'debit' }]} />
                                                )
                                            }


                                            {
                                                searchFeild == "status" && (
                                                    // <select id="type" onChange={(e) => setinputSearchTerm(e.target.value)} className="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    //     <option >Choose a status</option>
                                                    //     <option value="pending">pending</option>
                                                    //     <option value="approved">approved</option>
                                                    // </select>
                                                    <SelectFeild setinputSearchTerm={setinputSearchTerm} feilds={[{ name: 'click to select' }, { name: 'pending' }, { name: 'approved' }]} />
                                                )
                                            }




                                            {inputSearchTerm != "" && (
                                                <button
                                                    className="bg-pink-500 text-white shadow-2xl mt-3 active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={GRAPHQLSEARCH}
                                                >Click To Search </button>

                                            )

                                            }



                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center
                rounded-md border border-gray-300 shadow-sm px-4 py-2
       bg-white text-base font-medium text-gray-700
        hover:bg-gray-50 focus:outline-none focus:ring-2
                 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0
                 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setOpen(false)}
                                    ref={cancelButtonRef}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal