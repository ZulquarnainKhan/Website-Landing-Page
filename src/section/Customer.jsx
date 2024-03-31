import customer_intro from "../assets/images/customer_intro.png";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import Button from "../components/button";
// import ReviewCard from "../components/ReviewCard"

import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const Customer = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleEnterViewport = () => {
    setIsVisible(true);
  };
    return (
        <ScrollTrigger onEnter={handleEnterViewport}>
        <section className="max-container">
            <img src={customer_intro} className="" />
            {/* <h3 className="font-palanquin text-center text-4xl font-bold ">What Our
      <span className="text-coral-red "> Customers </span>
      Say?</h3>
      <p className="text-slate-gray text-center mx-auto mt-4 max-w-lg info-text">Hear genuine stories from our satisfied customers about their exceptional experience with us </p> */}

            <div className={`mt-24 flex flex-1 justify-evenly flex-wrap items-center max-lg:flex-col gap-14 text1-container ${isVisible ? 'fade-on' : ''}`}>
                <img src={c1} className="" />
                <img src={c2} className="" />
                <img src={c3} className="" />
            </div>

            <a href="" className="flex justify-center items-center mt-10">
                <Button label="VIEW ALL TEAM" />

            </a>

        </section>
        </ScrollTrigger>
    )
}

export default Customer