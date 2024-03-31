// import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/button";
import s1 from "../assets/images/s1.png"
import s2 from "../assets/images/s2.png"
import s3 from "../assets/images/s3.png"
import s4 from "../assets/images/s4.png"
import s5 from "../assets/images/s5.png"
import s6 from "../assets/images/s6.png"

import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleEnterViewport = () => {
    setIsVisible(true);
  };
    return (
        <ScrollTrigger onEnter={handleEnterViewport}>
        <section id="service" className="flex flex-col justify-center">

            {/* <div className={`flex justify-center items-center text-xl font-montserrat text_grad hero_intro_text "><FaArrowRightLong className="flex mr-2 hero_intro_text  `} style={{ color: "lightgreen" }} /> OUR BEST SERVICES</div> */}
            <div className={`flex justify-center items-center text-xl font-montserrat text_grad hero_intro_text service-container ${isVisible ? 'fade-up' : ''} `}><FaArrowRightLong className="flex mr-2 hero_intro_text" style={{ color: "lightgreen" }} /> OUR BEST SERVICES</div>
            
            <div className={`flex justify-center items-center font-palanquin text-3xl text-bold capitalise font-bold  service-container ${isVisible ? 'fade-up' : ''}`}>WE PROVIDE OUR BEST SERVICES</div>
            <section className={`.max-container flex justify-center flex-wrap  gap-0 service1-container ${isVisible ? 'fade-up' : ''}`}>
                <ServiceCard imgURL={s1} label="Strategy & Planning" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                <ServiceCard imgURL={s2} label="Planning & Strategy" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                <ServiceCard imgURL={s3} label="Content Marketing" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                <ServiceCard imgURL={s4} label="Seo Audit & Strategy" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                <ServiceCard imgURL={s5} label="Design & Development" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                <ServiceCard imgURL={s6} label="Seo Audit & Strategy" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?</p> */}
            </section>
            <a href="" className="flex justify-center items-center mt-10">
                <Button label="GET STARTED" />

            </a>
        </section>
        </ScrollTrigger>
    )
}

export default Services