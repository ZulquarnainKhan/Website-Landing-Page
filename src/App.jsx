// import {Hero,Services,Footer,SpecialOffer,SuperQuality,Subscribe,CustomerReview,PopularProducts} from "./sections/index"
import Nav from "./components/nav";
import Hero from "./section/Hero";
import About from "./section/About"
import Services from "./section/services";
import Market from "./section/Market";
import Customer from "./section/Customer";
import Project from "./section/Project";
import Process from "./section/Process";
// import Client from "./section/Client";
import News from "./section/News";
import Footer from "./section/footer";


const App = ()=>(
  <main className="relative ">
    
    < Nav />
    <section className=" ">
    {/* <section className="xl:padding-l wide:padding-r padding-b "> */}
      < Hero />
    </section>
    <section className="padding">
      <About/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>

    <section className="padding">
      <Market/>
    </section>
    <section className="">
      <Customer/>
    </section>
    <section className="padding">
      <Project/>
    </section>
    <section className="padding">
      <Process/>
    </section>
    {/* <section className="">
      <Client/>
    </section> */}
    <section className="padding">
      <News/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      {/* <Subscribe/> */}
    </section>
    <section className="padding-x padding-t pb-8 pt-8 max-md:pt-8" style={{background:"#4F7396"}}>
      <Footer/>
    </section>
  </main>
)

export default App;