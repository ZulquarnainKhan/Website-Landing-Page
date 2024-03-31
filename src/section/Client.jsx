import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/button";
import ClientCard from "../components/ClientCard";

import client1 from "../assets/images/client1.png"
import client2 from "../assets/images/client2.png"
import Carousel from "../components/Carousel_Project";
import ClientCarousel from "../components/ClientCarousal";

const slides = [
    { id: 1, component: <ClientCard imgURL={client1} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
    We’ve Established Ourselves As 
    One Of The Pioneering Agencies In 
    The Region. Our Small, Flexible, 
    Agile And Design-Led Structures & 
    Processes”"/> },
    { id: 2, component: <ClientCard imgURL={client2} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
    We’ve Established Ourselves As 
    One Of The Pioneering Agencies In 
    The Region. Our Small, Flexible, 
    Agile And Design-Led Structures & 
    Processes”"/> },
    { id: 3, component: <ClientCard imgURL={client1} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
    We’ve Established Ourselves As 
    One Of The Pioneering Agencies In 
    The Region. Our Small, Flexible, 
    Agile And Design-Led Structures & 
    Processes”"/> },
    { id: 4, component: <ClientCard imgURL={client1} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
    We’ve Established Ourselves As 
    One Of The Pioneering Agencies In 
    The Region. Our Small, Flexible, 
    Agile And Design-Led Structures & 
    Processes”"/> }
  ];

const Client = () => {
    return (
        <section id="#service" className="flex flex-col justify-center">

            <div className="flex justify-center items-center text-xl font-montserrat text_grad hero_intro_text"><FaArrowRightLong className="flex mr-2 hero_intro_text" style={{ color: "lightgreen" }} /> OUR TESTIMONIAL</div>
            <div className="flex justify-center items-center font-palanquin text-3xl text-bold capitalise font-bold  ">What Our Client Say About Us</div>

            <a href="" className="flex justify-center items-center mt-10"><section className=".max-container flex justify-center flex-wrap  gap-6">



            <Carousel autoSlide={true} >
                {[...slides.map((s) => (
                    // <ClientCard src={s} />
                    <span></span>
                )), 
                // <video src={vid} autoPlay muted loop />
            ]}
            </Carousel>
                
            {/* </ClientCarousel> */}



                {/* <ClientCard imgURL={client1} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”"/>
                <ClientCard imgURL={client2} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”"/>
                <ClientCard imgURL={client1} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”"/>
                <ClientCard imgURL={client2} type="Finance Specialist" label="ESTHER HOWARD" subtext="“With Over A Decade Of Experie, 
We’ve Established Ourselves As 
One Of The Pioneering Agencies In 
The Region. Our Small, Flexible, 
Agile And Design-Led Structures & 
Processes”"/> */}
                
            </section>


            </a>
            {/* <Button label="GET STARTED" /> */}
        </section>
    )
}

export default Client