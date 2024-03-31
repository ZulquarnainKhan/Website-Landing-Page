import React from 'react'
import star from "../assets/images/stars.png"

const ClientCard = ({ imgURL, type, label, subtext }) => {
    return (

        // <section className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

        <section className='flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100'>

            <div className="flex flex-col items-center bg-white border border-gray-200  md:flex-row md:max-w-xl hover:bg-gray-100 ">

                <img className="object-cover w-full border border-gray-200 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg " src={imgURL} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <img src={star} height={20} width={100} alt="" />
                    <p className="my-3 font-normal text-gray-500 ">{subtext}</p>
                </div>
            </div>

            <div className='flex justify-between px-6' >
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">{label}</h5>
                <div className="flex justify-center items-center text-sm font-montserrat text_grad font-bold">{type}</div>
            
            </div>
        </section>

    )
}

export default ClientCard