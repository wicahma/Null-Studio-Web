import React from "react";
import hand from "../assets/images/hand-we-do.png";
import we_do from "../assets/images/we-do.png";
const Works = (props) => {
  return (
    <section id="works" className="flex h-screen mb-10 gap-1 items-center">
      <div className="absolute left-0 lg:h-[560px] h-[310px] md:inline hidden z-0">
        <img src={hand} alt="big-hand" className="h-full z-10 relative " />
        <div className="absolute lg:right-16 lg:top-[230px] right-0 top-[80px] z-0 font-bold text-xs fill-emerald-500 animate-text">
          <svg viewBox="0 0 100 100" width="240" height="240">
            <defs>
              <path
                id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text>
              <textPath xlinkHref="#circle">
                SEE THERE - SEE THERE - SEE THERE -
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <div className="flex sm:absolute sm:m-0 ml-5 right-0 rounded-tl-[50px] rounded-bl-[50px] bg-emerald-500">
        <div className="sm:m-10 m-5 mt-10 w-[400px] dark:bg-neutral-900 bg-neutral-50 p-5 relative rounded-[30px]">
          <h2 className="text-6xl font-serif font-black absolute -top-10 left-3 dark:text-neutral-900 text-neutral-50">
            What We do
          </h2>
          <div className="font-extralight text-xl flex flex-col justify-between h-full">
            <p>Until now, we only serve one type of Development, that is</p>
            <div className="w-1/3 h-2 dark:bg-white bg-black" />
            <div>
              <h4 className="font-bold text-2xl mb-3">Web Dev</h4>
              <p>
                We Creating and build Frontend and Backend Web Development, and
                Wordpress Dev based on How clients want their website wants to
                be
              </p>
            </div>
          </div>
        </div>
        <div className="xl:block hidden">
          <img src={we_do} alt="people-opened-laptop" className="h-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default Works;
