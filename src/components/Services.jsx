import React from "react";
import women_ask from "../assets/images/women-ask.png";
import TemplateCard from "./TemplateCard";

const Services = (props) => {
  return (
    <section id="services" className=" flex justify-center flex-col gap-10 mx-5 mb-36">
      <div className="flex items-center max-h-fit justify-between bg-red-500 rounded-[50px]">
        <div className="m-10 self-start dark:text-neutral-900 text-white">
          <h1 className="font-serif text-7xl font-bold">
            Didn't know about choosing a Web Design?
          </h1>
          <p className="mt-5 text-lg">
            <span className="dark:bg-neutral-900 bg-white px-3 py-1 text-red-500">
              Dont worry!
            </span>{" "}
            check out our template below
          </p>
        </div>
        <div className="grow w-[870px] lg:block hidden">
          <img src={women_ask} alt="" className="max-h-[500px]" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row-dense gap-5 w-full">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </section>
  );
};

export default Services;
