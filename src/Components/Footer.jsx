import React, { useEffect, useState } from "react";

import ScrollIcon from "../Assets/icons/scroll-arrow.png";
import instagramIcon from "../Assets/icons/instagram.png";
import facebookIcon from "../Assets/icons/facebook.png";
import xIcon from "../Assets/icons/twitter.png";
import copyrightIcon from "../Assets/icons/copyright.png";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#153448] flex flex-col justify-center items-center">
      <button
        onClick={scrollToTop}
        className="flex flex-col justify-center items-center "
      >
        <img
          className="-rotate-90 w-[50px] h-[50px] border-[#EEEEEE] border-[4px] rounded-[50%] p-[2px] mt-[20px] mb-[10px]"
          src={ScrollIcon}
          alt="Scroll to top"
        />
        <p className="font-bold text-xl text-white">scroll to top</p>
      </button>
      <div className="social-media-icons mt-[10px] flex flex-row justify-center items-center">
        <a
          href="https://www.instagram.com/hassen_zouzou/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-[40px] mr-[20px]"
            src={instagramIcon}
            alt="Instagram"
          />
        </a>
        <a
          href="https://web.facebook.com/hassen.zouzou.35"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-[40px] mr-[20px]"
            src={facebookIcon}
            alt="Facebook"
          />
        </a>
        <a href="https://x.com/hassen_zouzou" target="_blank" rel="noreferrer">
          <img className="w-[40px]" src={xIcon} alt="Twitter" />
        </a>
      </div>
      <div className="copyright text-[15px] w-full h-[30px] bg-[#EEEEEE] mt-[20px] flex justify-center items-center">
        <img
          className="w-[20px] mr-[5px]"
          src={copyrightIcon}
          alt="Copyright"
        />
        <p className="mr-[5px]">{currentYear}</p>
        <p>HASSEN ZOUZOU | ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
