import React from 'react'
// import goto_services from "../assets/images/goto_services.png"

const NewsCard = ({ imgURL, type, label, date, subtext }) => {
    return (
        <section className='flex w-full justify-center mb-6 px-5 rounded-[20px] max-md:flex-col gap-5 '>
            <div className='  h-full flex justify-center  rounded-full '>
                <img src={imgURL} alt={label} className='flex w-[250px] h-[170px] items-center' />

            </div>

            <div className='' style={{ border: "1.5px solid silver", borderRadius: "1rem" }}>
                <div className='flex justify-between px-6 py-4'>
                    <a href='/' className="news_btn">{type}</a>
                    <p>{date}</p>
                </div>
                <h3 className='flex justify-center font-palanquin text-2xl font-extrabold col-span-2 px-6'>{label}</h3>
                <p className='flex justify-center mt-3  font-montserrat leading-normal text-slate-gray pro_desc text-center px-6' style={{fontSize:"0.8rem"}}>{subtext}</p>
                
            </div>
        </section>
    )
}

export default NewsCard