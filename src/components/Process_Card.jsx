import React from 'react'
// import goto_services from "../assets/images/goto_services.png"

const ProcessCard = ({imgURL,label,subtext}) => {
  return (
    <section className='flex-col items-center justify-center sm:w-[350px] sm:min-w-[350px] rounded-[20px]'>
        <div className=' w-full h-11 flex justify-center  rounded-full '>
            <img src={imgURL} alt={label} className='flex w-[150px] h-[150px] justify-center items-center' />

        </div>
        <h3 className='flex justify-center mt-32 font-palanquin text-2xl leading-normal font-extrabold  '>{label}</h3>
        <p className='flex justify-center mt-3  font-montserrat leading-normal text-slate-gray pro_desc text-center'>{subtext}</p>
        {/* <a href="" className='mt-6 flex justify-center'>
            <img src={goto_services} className='w-[40px] h-[40px] justify-center items-center'></img>
        </a> */}
    </section>
  )
}

export default ProcessCard