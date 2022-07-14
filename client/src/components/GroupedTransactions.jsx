import React from 'react'
import { ReactComponent as Approved } from "./assets/Approved.svg"
import { ReactComponent as Pending } from "./assets/Pending.svg"
import { ReactComponent as Deposit } from "./assets/Deposit.svg"
import { ReactComponent as Withdrawal } from "./assets/Withdrawal.svg"

function GroupedTransactions({ groupedTransactions }) {

    const TransformDate = (date) => {
        var d = new Date(date)
        return d.toDateString()
    }



    return (
        <div>

            {groupedTransactions.map((transaction) => (
                <div className='mb-14 mt-7'>
                    {/* <div className="grid grid-cols-3 gap-4 mt-3">
                        <div className="p-1 bg-pink-800 text-white  shadow-2xl shadow-2xl  rounded-md flex items-center justify-center">
                            {TransformDate(transaction.date)}</div>
                    </div> */}

                    <div className="grid grid-cols-3 gap-4 mt-3 w-full ">
                        <div className="rounded-lg shadow-sm mb-1">
                            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                <div className="px-1 pt-2 pb-3 text-center relative z-10">
                                    <h4 className="text-sm uppercase text-gray-500 leading-tight">  {TransformDate(transaction.date)}</h4>
                                    {/* <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">11,427</h3>
                                    <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        transaction.trans[0].map((single) => (
                            <div className="grid grid-cols-3 gap-4 mt-3 " key={single.id}>


                                <div className="bg-white  flex items-center font-semibold text-white rounded rounded-tr-3xl rounded-bl-3xl border-2 border-b-4 border-l-4 border-pink px-4 shadow-xl">

                                    {
                                        single.type == "debit" && (
                                            <>
                                                <div className='text-red-500'> ${single.amount} </div>
                                                <Withdrawal className='pl-2 w-10 rounded-full' />
                                            </>
                                        )
                                    }
                                    {
                                        single.type == "credit" && (
                                            <>
                                                <div className='text-green-500'> ${single.amount} </div>
                                                <Deposit className='pl-2 w-10 rounded-full' />
                                            </>

                                        )
                                    }
                                </div>



                                {/* col-span-2 p-1 bg-white-500 shadow-2xl rounded-md flex items-center justify-center */}
                                <div className="col-span-2  my-2 flex h-16 items-center justify-between rounded-lg border-2 border-b-4 border-l-4 border-pink px-4 shadow-xl">
                                    <div className="flex items-center">
                                        {
                                            single.status == "approved" && (
                                                <Approved className="w-10 rounded-full" />
                                            )
                                        }

                                        {
                                            single.status == "pending" && (
                                                <Pending className="w-10 rounded-full" />
                                            )
                                        }

                                        <div className="ml-2">
                                            <div className="text-xs font-semibold"> {single.description}</div>
                                            <div className="flex text-xs font-light text-gray-600">
                                                {single.name}
                                            </div>
                                            <div className="flex text-xs font-light text-gray-600">
                                                {single.status}
                                            </div>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>

                            </div>
                        ))
                    }

                </div>
            ))}</div>
    )
}

export default GroupedTransactions