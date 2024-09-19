import React from "react";
import BookLogo from "../assets/Book_open_light.svg";
import SubtaskLogo from "../assets/Subttasks_light.svg";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import youtube from "../assets/youtube.png";
import Cards from "./utils/Cards";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";

const menus = [{ image: { pic1 }, title: "Bwallet", subject: "Business wallet" }];
const Hero = () => {
  return (
    <section className="container mx-auto mt-10 md:mt-12">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="">
          <h1 className="font-light text-3xl leading-[120%] md:text-7xl md:leading-[102%] ">
            <span className="flex items-center md:items-end">
              Let’s learn <img src={BookLogo} className="ml-2 md:ml-4 w-14 h-14" alt="" />
            </span>
            <span className="flex items-center md:items-end">
              to code <img src={SubtaskLogo} className="ml-1 md:ml-4 w-14 h-14" alt="" />
            </span>
            an application
          </h1>
        </div>

        <div className="mt-8 md:relative">
          <h3 className="leading-base w-11/12 md:w-[374px]">
            with me
            <span className="text-brand"> Pande Deva</span>, a software developer who loves to share how to code in many programing languages and multi platforms.
          </h3>
          <div className="mt-8 flex">
            <button className="py-2 px-6 rounded-full bg-brand text-white text-sm leading-base">Start learn</button>
            <ul className="flex items-center space-x-4 ml-4 md:absolute md:flex-col md:space-x-0 md:space-y-6 md:items-end md:-top-5 md:right-0 lg:hidden">
              <li>
                <a href="">
                  <img src={github} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={tiktok} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={youtube} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* frame section */}
      <div className="grid grid-cols-1 mt-14 gap-6 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {/* bisa pake map TAPI BELUM TAU CARANYA LOL */}
        {/* <div>
          {heroPic.map((menu, index) => (
            <Cards key={index} image={menu.image} title={menu.title} subject={menu.subject} />
          ))}
        </div> */}
        <Cards image={pic1} title="BWallet" subject="Business wallet" />
        <Cards image={pic2} title="Bookies" subject="Read digital book app" />
        <Cards image={pic3} title="Gojek" subject="Home screen gojek apps" />
        <Cards image={pic4} title="Bookies" subject="Read digital book app" />
        <Cards image={pic1} title="Gojek" subject="Home screen gojek apps" />
        <Cards image={pic2} title="BWallet" subject="Business wallet" />
      </div>
      <div className="items-center flex justify-center mt-5 lg:mt-14">
        <button className="text-sm leading-base py-2 px-6 rounded-full border border-brand">Load More</button>
      </div>
    </section>
  );
};

export default Hero;
