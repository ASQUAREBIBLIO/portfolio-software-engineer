import { TfiClose } from "react-icons/tfi";
import { AiOutlineCopyright } from "react-icons/ai";
import { Logo } from "./UIElements";

const menu = ["Home", "Resume", "Skills", "Services", "Portfolio", "Contact"];

interface Props {
  isOpen: boolean;
  handleOnClose: any;
}

export const LeftNavMenu = ({ isOpen, handleOnClose }: Props) => {
  return (
    <div
      className={`dropdown-menu flex flex-col items-center justify-center gap-1 fixed top-0 ${
        isOpen ? `left-0 right-0 w-full h-2/3 z-50` : `hidden`
      } bg-slate-100 drop-shadow-md sm:static sm:flex sm:flex-row sm:min-w-max  sm:bg-transparent sm:drop-shadow-none sm:animate-right_left`}
    >
      <div className="flex justify-between items-center absolute top-5 left-2 right-2 sm:hidden sm:flex-none">
        <Logo width={40} height={40} />
        <div onClick={handleOnClose}>
          <TfiClose />
        </div>
      </div>

      {menu.map((item) => (
        <a
          href={`#${item.toLowerCase()}`}
          key={item}
          className="font-semibold text-slate-900 rounded-md px-2 py-1 cursor-pointer hover:bg-slate-50 hover:text-slate-700 focus:bg-slate-100 focus:text-slate-700 "
        >
          {item}
        </a>
      ))}

      <div className="absolute bottom-10 sm:hidden sm:overflow-hidden">
        <p className="flex justify-center items-center text-sm text-slate-900">
          <AiOutlineCopyright />
          2023 Copyrights. All rights reserved.
        </p>
      </div>
    </div>
  );
};
