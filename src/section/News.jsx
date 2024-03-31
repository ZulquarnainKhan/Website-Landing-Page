// import { arrowRight } from "../assets/icons"
// import { shoe8 } from "../assets/images"
import Button from "../components/button"
import { FaArrowRightLong } from "react-icons/fa6";
import NewsCard from "../components/News_card";
import n1 from "../assets/images/n1.png"
import n2 from "../assets/images/n2.png"
import n3 from "../assets/images/n3.png"
import n4 from "../assets/images/n4.png"

import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


const News = () => {

    const [isVisible, setIsVisible] = useState(false);

  const handleEnterViewport = () => {
    setIsVisible(true);
  };
    return (
        <ScrollTrigger onEnter={handleEnterViewport}>
        <section id="blog" className="grid_section flex justify-between min-lg:flex-col  gap-10 w-full max-container ">
            <div className={`flex flex-1 flex-col about-container ${isVisible ? 'fade-in' : ''} `} >
                <p className="flex items-center text-xl font-montserrat text_grad hero_intro_text"><FaArrowRightLong className="flex mr-2 hero_intro_text" style={{ color: "lightgreen" }} /> OUR BLOGS & NEWS</p>
                {/* <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p> */}
                <h2 className="font-palanquin text-3xl text-bold capitalise font-bold lg:max-w-lg ">
                    Get More Update For News
                </h2>

                <p className="font-montserrat about_desc_text text-lg mt-6 mb-6 sm:max-w-sm">We are 100+ professional software engineers with more than 10 years of experience in delivering superior products Beleive it because you have seen it. Here are the real numbers</p>

                <a href='' className="mt-6 ">
                    <Button label="VIEW ALL BLOG" />

                </a>

            </div>

            {/* <div className={`flexflex-1 justify-center items-center text-container ${isVisible ? 'fade-in' : ''}`} > */}
            <div className={`flexflex-1 justify-center items-center text1-container ${isVisible ? 'fade-on' : ''}`} >
                {/* <img src={about_img} alt="shoe8" className="w-[570px] h-[522px]" /> */}
                <NewsCard className="" imgURL={n1} type="Design" label="Agency Need To Embrace Social Media.." date="March 7 2024" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>
                <NewsCard className="" imgURL={n2} type="Business" label="Lead Designer's UI/UX Core Checklist." date="March 7 2024" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>
                <NewsCard className="" imgURL={n3} type="Design" label="Lead Designer's UI/UX Core Checklist." date="March 7 2024" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>
                <NewsCard className="" imgURL={n4} type="Design" label="We Are Building Everything You Need" date="March 7 2024" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>
            </div>

        </section>
        </ScrollTrigger>
    )
}

export default News