import React from "react";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";

const Cards = ({ title, image, subject }) => {
  return (
    <div className="px-3">
      <img src={image} className="w-full h-full object-cover" alt={title} />
      <div className="flex mt-4 items-center justify-between">
        <div>
          <h5 className="font-medium leading-[120%] text-lg md:text-2xl">{title}</h5>
          <p className="leading-base text-sm">{subject}</p>
        </div>
        {/* gunakan map mMASI BELUM BISA LOL SOON I FIXED IT <3*/}
        <div className="flex -space-x-4">
          <div className="hidden md:flex -space-x-4">
            <div className="rounded-full bg-dark text-white w-9 h-9 items-center flex justify-center text-xs md:text-sm border-2 border-white">
              <img src={avatar1} alt="" />
            </div>
            <div className="rounded-full bg-dark text-white w-9 h-9 items-center flex justify-center text-xs md:text-sm border-2 border-white">
              <img src={avatar2} alt="" />
            </div>
            <div className="rounded-full bg-dark text-white w-9 h-9 items-center flex justify-center text-xs md:text-sm border-2 border-white">
              <img src={avatar3} alt="" />
            </div>
          </div>
          <div className="rounded-full bg-dark text-white w-9 h-9 items-center flex justify-center text-xs md:text-sm border-2 border-white">+99</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
