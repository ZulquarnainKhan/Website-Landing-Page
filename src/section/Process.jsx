import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/button";
import ProcessCard from "../components/Process_Card";
import project1 from "../assets/images/project1.png"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.png"

import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const Process = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleEnterViewport = () => {
    setIsVisible(true);
  };
    return (
        <ScrollTrigger onEnter={handleEnterViewport}>

        
        <section id="#service" className="flex flex-col justify-center">

            <div className={`flex justify-center items-center text-xl font-montserrat text_grad hero_intro_text service-container ${isVisible ? 'fade-up' : ''}`}><FaArrowRightLong className="flex mr-2 hero_intro_text" style={{ color: "lightgreen" }} /> OUR WORK PROCESS</div>
            <div className={`flex justify-center items-center font-palanquin text-3xl text-bold capitalise font-bold service-container ${isVisible ? 'fade-up' : ''} `}>A Simple, Yet Powerful And Efficient Process</div>
            
            <a href="" className={`flex justify-center items-center mt-10 service1-container ${isVisible ? 'fade-up' : ''}`}><section className=".max-container flex justify-center flex-wrap  gap-6">
                {/* <ServiceCard imgURL={s1} label="Strategy & Planning" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                <ServiceCard imgURL={s2} label="Planning & Strategy" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                <ServiceCard imgURL={s3} label="Content Marketing" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                <ServiceCard imgURL={s4} label="Seo Audit & Strategy" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                <ServiceCard imgURL={s5} label="Design & Development" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                <ServiceCard imgURL={s6} label="Seo Audit & Strategy" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, reprehenderit facilis. Doloribus sint ex ut corrupti! Repudiandae a quia ut?" />
                 */}
                 <ProcessCard imgURL={project1} label="1. MARKETING PLAN" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>
                 <ProcessCard imgURL={project2} label="2. EXECUTION" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>
                 <ProcessCard imgURL={project3} label="3. GROWTH & SCALE" subtext="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>
            </section>
                

            </a>
            {/* <Button label="GET STARTED" /> */}
        </section>
        </ScrollTrigger>
    )
}

export default Process