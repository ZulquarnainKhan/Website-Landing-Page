import Hero_img from "../assets/images/hero_img.png"
// import hero_bg from "../assets/images/hero_bg.png"
import hero_short from "../assets/images/hero_short.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/button"
import { FaPlayCircle } from "react-icons/fa";
import google from "../assets/images/google.png"
import amazon from "../assets/images/amazon.png"
import slack from "../assets/images/slack.png"
import spotify from "../assets/images/spotify.png"
import walmart from "../assets/images/walmart.png"
import linkedin from "../assets/images/linkedin.png"
// import google from "../assets/images/google.png"

import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const Hero = () => {

  // const [bigShoeImg,setBigShoeImg] = useState(bigShoe1);
  const [isVisible, setIsVisible] = useState(false);

  const handleEnterViewport = () => {
    setIsVisible(true);
  };



  return (
    <ScrollTrigger onEnter={handleEnterViewport}>
    <section id="home">

      
      <section className="hero_sec max-w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-4">
        {/* <img src={hero_bg} alt="" width={610} height={400} className=" object-contain z-10" /> */}

        <div className={`relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 about-container ${isVisible ? 'fade-in' : ''}`}>
          <img src={Hero_img} alt="" width={500} className=" object-contain z-10" />

          <div className="flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {/* {shoes.map((shoe)=>(
            <div key={shoe}>
            <ShoeCard imgURL={shoe}
              changeBigShoeImage={(shoe)=>{ setBigShoeImg(shoe)
                bigShoeImg = {bigShoeImg}
              }}/>
            </div>
          ))} */}
            <img src={hero_short} alt="" width={500} height={300} className=" object-contain z-10 hero_short" />
          </div>
        </div>


        <div className={`relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 text-container ${isVisible ? 'fade-in' : ''} max-lg:pt-10`}>
          <p className="flex items-center text-xl font-montserrat text_grad hero_intro_text"><FaArrowRightLong className="flex mr-2 hero_intro_text" style={{ color: "lightgreen" }} /> WELCOME TO JYTHU</p>
          <h1 className=" font-palanquin text-4xl max-md:text-[40px] max-md:leading-[70px] font-bold hero_text">
            <span className=" relative z-10 pr-10 hero_text" >A MARKETING</span><br />
            <span className="text_grad inline-block  ">AGENCY </span> TO GROW YOUR BUSINESS
          </h1>
          <p className="font-montserrat hero_desc_text text-lg leading-6 mt-6 mb-14 sm:max-w-sm">We are 100+ professional software engineers with more than 10 years of experience in delivering superior products Beleive it because you have seen it. Here are the real numbers</p>

          <div className="flex items-center justify-between w-full pr-14">
            <Button label="GET STARTED" />
            <a href="">
              <button className='flex justify-center items-center gap-2 px-4 py-4 font-montserrat  text-lg leading-none '>
                <FaPlayCircle className="play_btn" /> <span className="font-medium hero_text text-sm" >WATCH VIDEO</span>
              </button>
            </a>
          </div>

          {/* <div className="flex flex-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat)=>(
            <div key={stat.label}>
            <p className="text-3xl font-palanquin font-bold">{stat.value}</p>
            <p className="leading-7 font-montserrat text-slate-grey">{stat.label}</p>
            </div>
            ))}
            
          </div> */}
        </div>
      </section>
      <div className="flex flex-col px-28 py-24" style={{fontSize:"2rem",fontWeight:"600"}}>
        <p><span className="hero_span ">200+ </span> TRUSTED PARTNERS</p>
      </div>
      <div className="flex flex-row max-lg:flex-wrap justify-evenly mb-12">
          <img src={google} className="mb-6 mx-2" />
          <img src={amazon}  className="mb-6 mx-2"/>
          <img src={spotify} className="mb-6 mx-2" />
          <img src={linkedin} className="mb-6 mx-2" />
          <img src={slack} className="mb-6 mx-2" />
          <img src={walmart} className="mb-6 mx-2" />
      </div>
      <hr/>
    </section>
    </ScrollTrigger>
  )
}

export default Hero