import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center md:justify-between items-center gap-4 bg-gradient-to-t from-slate-100 to-slate-50 px-2 py-12 sm:px-10 lg:px-32">
      <div className="flex justify-center items-center gap-3 text-slate-900">
        <FaFacebook className="hover:text-slate-600 transition ease-in delay-75 duration-75 text-2xl" />
        <FaLinkedin className="hover:text-slate-600 transition ease-in delay-75 duration-75 text-2xl" />
        <FaGithub className="hover:text-slate-600 transition ease-in delay-75 duration-75 text-2xl" />
        <FaDribbble className="hover:text-slate-600 transition ease-in delay-75 duration-75 text-2xl" />
      </div>
      <div className="">
        <p className="flex justify-center items-center text-sm text-slate-900">
          <AiOutlineCopyright />
          2023 Copyrights. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
