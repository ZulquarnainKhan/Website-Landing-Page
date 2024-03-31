// import { arrowRight } from "../assets/icons"
// import { shoe8 } from "../assets/images"
import Button from "../components/button"
import about_img from "../assets/images/about.png"
import about_img2 from "../assets/images/about2.png"
import { FaArrowRightLong } from "react-icons/fa6";

import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


const About = () => {

    const [isVisible, setIsVisible] = useState(false);

  const handleEnterViewport = () => {
    setIsVisible(true);
  };

    return (
        <ScrollTrigger onEnter={handleEnterViewport}>
        <section id="about" className="flex justify-between max-lg:flex-col items-center gap-10 w-full max-container">
            <div className={`flex flex-1 flex-col about-container ${isVisible ? 'fade-in' : ''}`}>
                <p className="flex items-center text-xl font-montserrat text_grad hero_intro_text"><FaArrowRightLong className="flex mr-2 hero_intro_text" style={{ color: "lightgreen" }} /> ABOUT US</p>
                {/* <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p> */}
                <h2 className="font-palanquin text-3xl text-bold capitalise font-bold lg:max-w-lg ">
                    We Want To Give You The Best Service
                </h2>

                <p className="font-montserrat about_desc_text text-lg mt-6 mb-6 sm:max-w-sm">We are 100+ professional software engineers with more than 10 years of experience in delivering superior products Beleive it because you have seen it. Here are the real numbers</p>


                <div className="flex flex-1 row">
                    <div>
                        <div>
                            <div className="about_year">24</div>
                            <p className="about_year_desc">YEAR EXPERIENCE</p>
                        </div>
                        <div className="mt-11 ">
                            <Button label="GET STARTED" />

                        </div>
                    </div>
                    <div>
                        <img src={about_img2}/>
                    </div>

                </div>
            </div>

            <div className={`flex flex-1 justify-center items-center text-container ${isVisible ? 'fade-in' : ''}`}>
                <img src={about_img} alt="shoe8" className="w-[570px] h-[522px]" />
            </div>

        </section>
        </ScrollTrigger>
    )
}

export default About