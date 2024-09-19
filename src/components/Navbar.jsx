import React from "react";
import profile from "../assets/profile.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import youtube from "../assets/youtube.png";
import { List } from "@phosphor-icons/react";

const menus = [
  { href: "/", text: "home" },
  { href: "/about", text: "about" },
  { href: "/contact", text: "contact" },
];

const Navbar = () => {
  return (
    <header className="container mx-auto">
      <div className="py-3 md:py-4 flex flex-row justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href="/" className="flex py-2 space-x-2 md:space-x-4 md:px-3 items-center">
            <img src={profile} className="w-6 h-6 md:w-10 md:h-10 object-cover bg-white rounded-full" alt="" />
            <span className="font-semibold leading-base">It’s me</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex space-x-2">
              {menus.map((menu, index) => (
                <li key={index} className="px-3 py-2">
                  <a href={menu.href} className="leading-base text-sm">
                    {menu.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-3 md:space-x-0">
          <div className="lg:flex hidden justify-center items-center space-x-6 mr-6 ">
            <a href="">
              <img src={github} alt="" />
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={tiktok} alt="" />
            </a>
            <a href="">
              <img src={youtube} alt="" />
            </a>
          </div>
          <button className="text-sm leading-base py-2 px-6 rounded-full border border-brand">Download CV</button>
          <button className="p-2 md:hidden">
            <List size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
