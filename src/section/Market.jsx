// import { arrowRight } from "../assets/icons"
// import { shoe8 } from "../assets/images"
import Button from "../components/button"
import market_img from "../assets/images/market_img.png"
import market_call from "../assets/images/market_call.png"
import { FaArrowRightLong } from "react-icons/fa6";

import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const Market = () => {

    const [isVisible, setIsVisible] = useState(false);

  const handleEnterViewport = () => {
    setIsVisible(true);
  };
    return (
        <ScrollTrigger onEnter={handleEnterViewport}>

        
        <section id="about-us" className="flex justify-between max-lg:flex-col items-center gap-10 w-full max-container">
            <div className={`flex flex-1 justify-center items-center about-container ${isVisible ? 'fade-in' : ''}`}>
                <img src={market_img} alt="img" className="w-[570px] h-[522px]" />
            </div>
            <div className={`flex flex-1 flex-col text-container ${isVisible ? 'fade-in' : ''}`}>
                <p className="flex items-center text-xl font-montserrat text_grad hero_intro_text"><FaArrowRightLong className="flex mr-2 hero_intro_text" style={{ color: "lightgreen" }} /> WITH SEO OPTIMIZATION</p>
                {/* <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p> */}
                <h2 className="font-palanquin text-3xl text-bold capitalise font-bold lg:max-w-lg ">
                    MARKETING AND CREATIVE SOLUTIONS SEO
                </h2>

                <p className="font-montserrat about_desc_text text-lg mt-6 mb-6 sm:max-w-sm">We are 100+ professional software engineers with more than 10 years of experience in delivering superior.</p>


                <div className="flex-col flex-1 row">
                    <div>
                    <div class="skills_list grid">
                            <div class="skills_data">
                                <div class="skills_title">
                                    <h3 class="skills_name">Finance Consuting</h3>
                                    <span class="skills_number">80%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_data">

                                    </span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_title">
                                    <h3 class="skills_name">Finance Consuting</h3>
                                    <span class="skills_number ">80%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_data new">

                                    </span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_title">
                                    <h3 class="skills_name">Finance Consuting</h3>
                                    <span class="skills_number">80%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_data">

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-11 flex justify-between">
                        <Button label="GET STARTED" />
                        <img src={market_call} ></img>

                    </div>

                </div>
            </div>


        </section>
        </ScrollTrigger>
    )
}

export default Market