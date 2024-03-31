import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({ label }) => {
    return (
        <a href='' className='flex items-center'>

            <button className='flex justify-center items-center gap-2 px-4 py-4 font-montserrat  text-lg leading-none btn'>
                {label}
                {/* {iconURL && <img src={iconURL} className="ml-2 rounded-full w-5 h-5" /> } */}
                {/* < div class="btn-wrap pt-10 d-flex align-items-center" >
                <a class="gto-btn-4 wow fadeInRight" data-wow-delay=".9s" href="https://themexriver.com/wp/gesto/contact/" style="visibility: visible; animation-delay: 0.9s; animation-name: fadeInRight;">
                    <span class="btn-txt">get started</span>
                    <span class="btn-icon"><i class="far fa-arrow-right"></i></span>
                    </a>
                    <a className="gto-play-btn-6 wow fadeInRight" data-wow-delay="1.2s" href="#" style="visibility: visible; animation-delay: 1.2s; animation-name: fadeInRight;">
                    <div class="icon">
                    <i class="far fa-play-circle"></i>
                    </div>
                    watch video</a>
                </div> */}
            </button>
                <FiArrowUpRight className='btn_side' />
        </a>
    )
}

export default Button

