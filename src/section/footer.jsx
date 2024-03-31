// import { copyrightSign } from "../assets/icons/copyright-sign.svg"
import footerLogo from "../assets/images/logo.png"
import { footerLinks } from "../constants/index"
import footer_img from "../assets/images/footer_img.png"

const Footer = () => {
    return (
        <footer id="contact" className="">
            <div className="relative_box flex justify-between mx-36 max-md:mx-0 max-md:w-full  bg_grad h-[300px] w-auto">
                <img src={footer_img} width={350} height={600} className="px-8 footer_img max-md:hidden" />
                <div className="text-center pr-16 pt-8 max-md:pr-0 max-md:mx-4" style={{ color: "white" }}>
                    <h2 className="font-palanquin text-3xl max-md:text-xl text-bold capitalise font-bold lg:max-w-lg ">
                        We Want To Give You The Best Service
                    </h2>

                    <p className="font-montserrat about_desc_text text-lg mt-6 mb-6 sm:max-w-sm max-md:text-[10px]" style={{ color: "white" }}>We are 100+ professional software engineers with more than 10 years of experience in delivering superior products Beleive it because you have seen it. Here are the real numbers</p>

                    <form className="max-w-md mx-auto max-md:mx-2">
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg> */}
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn_grad">Search</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className={`flex justify-between items-start mb-24 gap-20 flex-wrap max-lg:flex-col `}>
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} width={150} height={46} />
                    </a>

                    <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Improve Efficiency, Provide A Better Customer Experience With Modern Technolo Services Available</p>
                    {/* <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon)=>(
              <div className="flex justify-center items-center  w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div> */}
                </div>

                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((section) => (
                        <div key={section}>
                            <h4 className="text-white font-montserrat text-2xl leading-normal font-medium">{section.title}</h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                                        <a>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="flex justify-between text-white-400 mt-4 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    {/* <img src={copyrightSign} alt="copy right" width={20} height={20} className="rounded-full m-0"/> */}
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
            </div>
        </footer>
    )
}

export default Footer