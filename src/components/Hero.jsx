import React from "react";
import hero_headphone from "../assets/images/hero-headphone.png";
import hero_figma from "../assets/images/hero-figma.png";
import hero from "../assets/images/hero-1.png";
const Hero = (props) => {
  return (
    <section id="home" className="h-[93vh] flex gap-6 items-center">
      <div className="dark:text-white basis-1/3 text-neutral-900 grow z-10 lg:p-0 px-5">
        <p className="font-light text-xl">Want to know about us?</p>
        <h2 className="font-serif lg:text-6xl text-5xl font-bold dark:text-yellow-500 text-orange-500">
          We are a Dev Studio that focuses on the creation of a Business
          Portfolio Website to appropriate products and services.
        </h2>
      </div>
      <div className="lg:w-[500px] w-[90%] lg:relative absolute blur-sm lg:blur-0  z-[1] lg:opacity-100 opacity-10 flex-none lg:dark:bg-purple-500 lg:bg-orange-500 aspect-square rounded-[30px]">
        <img
          src={hero_headphone}
          alt="headphone"
          className="w-36 absolute top-3 -left-16"
        />
        <img
          src={hero}
          alt="hero-main"
          className="lg:max-w-[130%] xl:block absolute -top-6 left-1/2 -translate-x-1/2"
        />
        <img
          src={hero_figma}
          alt="figma"
          className="w-32 absolute bottom-10 -right-20 xl:block hidden"
        />
      </div>
    </section>
  );
};

export default Hero;
