import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "react-feather"
import ClientCard from './ClientCard'

import client1 from "../assets/images/client1.png"
import client2 from "../assets/images/client2.png"

const ClientCarousel = ({ autoSlide=true, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? 4 - 1 : curr - 1))

    const next = () => setCurr((curr) => (curr === 4 - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])


    return (
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-1000 gap-9 h-[400px] w-[2000px]' style={{ transform: `translateX(-${curr * 50}%)` }}>
                {/* {slides} */}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className='p-1 z-50 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='p-1 z-50 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight />
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {/* {slides.map((s, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))} */}
                    <ClientCard imgURL={client1} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”"/>
                <ClientCard imgURL={client2} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”"/>
                <ClientCard imgURL={client1} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”"/>
                <ClientCard imgURL={client2} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”"/>
                </div>
            </div>
        </div>

    )
}

export default ClientCarousel