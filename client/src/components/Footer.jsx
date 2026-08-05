import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        <div className="md:max-w-96">
          <div className="md:max-w-96">
            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
              <img
                src={assets.logo}
                alt="CinemaX"
                className="w-12 h-12 object-contain"
              />

              <div className="flex flex-col leading-none">
                <h1 className="text-2xl font-extrabold tracking-wide">
                  <span className="text-red-500">Cinema</span>
                  <span className="text-white">X</span>
                </h1>

                <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-1">
                  Movie Booking
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm">
              CinemaX is your go-to destination for discovering the latest
              movies, exploring showtimes, and booking tickets with ease. Enjoy
              a seamless, fast, and secure movie ticket booking experience
              designed for every cinema lover.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <img
              src={assets.googlePlay}
              alt="google play"
              className="h-9 w-auto"
            />
            <img src={assets.appStore} alt="app store" className="h-9 w-auto" />
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91 9142341950</p>
              <p>CinemaX@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © CinemaX.<br></br>All Right
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
