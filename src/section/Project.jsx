// import { arrowRight } from "../assets/icons"
// import { shoe8 } from "../assets/images"
import Button from "../components/button"
// import { Carousel } from "@material-tailwind/react";
import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from "../components/Carousel_Project";

import p1 from "../assets/images/p1.png"
import p2 from "../assets/images/p2.png"
import p3 from "../assets/images/p3.png"

const slides = [
    p1,
    p2,
    p3,
    p1,
    p2,
    p3,
    p1,
    p2,
    p3,
  ]

const Project = () => {
    return (
        <section id="project" className="flex-col justify-between max-lg:flex-col items-center gap-10 w-full max-container">

            <div className="flex flex-1 justify-evenly flex-wrap mb-10">
                <div className="flex-col items-center">

                    <p className="flex items-center text-xl font-montserrat text_grad hero_intro_text"><FaArrowRightLong className="flex mr-2 hero_intro_text" style={{ color: "lightgreen" }} /> OUR BEST PROJECTS</p>
                    {/* <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p> */}
                    <h2 className="font-palanquin text-3xl text-bold capitalise font-extrabold lg:max-w-lg ">
                        Take A Look Our Work Gallery Recent Projects
                    </h2>
                </div>


                <div className="mt-11 flex-col justify-between">
                    <p className="font-montserrat about_desc_text text-lg  mb-6 sm:max-w-sm">We are 100+ professional software engineers with more than 10 years of experience in delivering superior.</p>
                    <Button label="GET STARTED" />
                    {/* <img src={market_call} ></img> */}

                </div>

                {/* </div> */}
            </div>
            <Carousel autoSlide={true} >
                {[...slides.map((s) => (
                    <img src={s} />
                )), 
                // <video src={vid} autoPlay muted loop />
            ]}
            </Carousel>

        </section>
    )
}

export default Project