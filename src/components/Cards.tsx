"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";

// *************************************************************
// Education item card
// *************************************************************

interface ResumeProps {
  id: number;
  school: string;
  formation: string;
  yearStart: number;
  yearEnd: number;
}
export const EducationItem = ({
  id,
  school,
  formation,
  yearStart,
  yearEnd,
}: ResumeProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const element = document.querySelector(`.item-${id}`);

    if (element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`item-${id} relative flex flex-col justify-start text-left mt-4 p-7 bg-gradient-to-r from-slate-200 to-slate-50 ${
        isVisible && `animate-up_down`
      } transition ease-in delay-100 duration-100 hover:translate-x-1 hover:-translate-y-1 shadow-md before:content-[''] before:absolute before:-top-1 before:-left-1 before:bg-slate-50 before:w-5 before:h-5 before:rounded-full`}
    >
      <h3 className={`font-bold text-slate-900 `}>{school}</h3>
      <h5 className={`font-semibold text-slate-700 `}>{formation}</h5>
      <p className={``}>
        from <span className="text-slate-500 font-semibold">{yearStart}</span>{" "}
        to <span className="text-slate-500 font-semibold">{yearEnd}</span>
      </p>
    </div>
  );
};

// *************************************************************
// Skills item card
// *************************************************************

interface SkillProps {
  id: number;
  percentage: number;
  skill: string;
}

export const SkillItem = ({ id, percentage, skill }: SkillProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const element = document.querySelector(`.percent-stack-${id}`);

    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < windowHeight || elementBottom < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (count < percentage) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 8);
    }
    return () => clearInterval(interval);
  }, [count, percentage]);

  return (
    <div className="flex flex-col gap-2 w-72">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-slate-900">{skill}</h3>
        <div className="percent text-3xl font-bold text-slate-900 flex items-start">
          {count}
          <span className="text-base text-slate-400">%</span>
        </div>
      </div>
      <div className="relative w-72 h-2 bg-slate-400 rounded-md">
        <div
          className={`percent-stack-${id} absolute left-0 h-2 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md ${
            isVisible && `animate-grow_width`
          }`}
          style={{ width: (percentage * 288) / 100 }}
        ></div>
      </div>
    </div>
  );
};

// *************************************************************
// Services item card
// *************************************************************

interface ServiceProps {
  id: number;
  icon: any;
  title: string;
}

export const ServiceCard = ({ id, icon, title }: ServiceProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const element = document.querySelector(`.card-${id}`);

    if (element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`card-${id} flex flex-col justify-center items-start text-slate-900 bg-gradient-to-tr from-slate-200 to-slate-50 p-7 mt-4 shadow-md ${
        isVisible && `animate-up_down`
      } transition ease-in delay-100 duration-100 hover:translate-x-1 hover:-translate-y-1`}
    >
      <div className="text-slate-900 bg-slate-400 p-3 mb-5 rounded-full shadow-md">
        {icon}
      </div>
      <h2 className="font-bold mb-1">{title}</h2>
      <p className="text-slate-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet iusto ea
        velit vel.
      </p>
    </div>
  );
};

// *************************************************************
// Project item card
// *************************************************************

import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  techs: { name: string }[];
}
export const ProjectCard = ({
  id,
  title,
  description,
  image,
  techs,
}: ProjectProps) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleOnShow = () => {
    setIsHidden((prevIsHidden) => false);
  };
  const handleOnHide = () => {
    setIsHidden((prevIsHidden) => true);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const element = document.querySelector(`.project-${id}`);

    if (element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {isFullScreen && (
        <div className="fixed z-30 top-0 left-0 w-full h-full bg-black opacity-60 overflow-hidden"></div>
      )}
      <div
        className={`${
          !isFullScreen
            ? `project-${id} relative flex h-72 w-full bg-slate-200 shadow-md mt-4 overflow-hidden ${
                isVisible && `animate-up_down`
              } transition ease-in delay-100 duration-100`
            : `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-3/4 h-3/4 shadow-2xl overflow-y-scroll bg-slate-200`
        }`}
      >
        <Image
          src={image}
          alt={title}
          className={`m-auto w-full h-auto  shadow-md rounded-sm`}
        />
        <div
          className={`${
            isFullScreen ? `sticky` : `absolute`
          } left-0 bottom-0 text-slate-200 bg-gradient-to-t from-slate-900 to-transparent w-full px-7 py-4 transition ease-in delay-100 duration-100`}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl">{title}</h2>
            {isHidden ? (
              <div
                onClick={handleOnShow}
                className="transition ease-in delay-100 duration-100 cursor-pointer"
              >
                <FaAngleUp />
              </div>
            ) : (
              <div
                onClick={handleOnHide}
                className="transition ease-in delay-100 duration-100 cursor-pointer"
              >
                <FaAngleDown />
              </div>
            )}
          </div>
          <p className={`text-slate-100 ${isHidden ? `hidden` : `flex`}`}>
            {description}
          </p>

          <div className="flex justify-start gap-2 mt-2">
            {techs.map((tech) => (
              <span
                key={tech.name}
                className={`${
                  isHidden ? `hidden` : `flex`
                } bg-slate-400 text-slate-900 font-semibold rounded-xl shadow-md py-0 px-2 w-fit`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        {!isFullScreen ? (
          <div
            className="absolute top-2 right-2 bg-slate-400 text-slate-900 rounded-full shadow-md p-1 cursor-pointer"
            onClick={() => setIsFullScreen(true)}
          >
            <AiOutlineFullscreen />
          </div>
        ) : (
          <div
            className="fixed top-4 right-4 bg-slate-400 text-slate-900 rounded-full shadow-md p-3 cursor-pointer overflow-auto"
            onClick={() => setIsFullScreen(false)}
          >
            <AiOutlineFullscreenExit />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
