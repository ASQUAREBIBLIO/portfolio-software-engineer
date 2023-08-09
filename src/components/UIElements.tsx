import Image from "next/image";
import PROFILE from "../../public/ahmed.png";

interface Props {
  width: number;
  height: number;
}

export const Logo = ({ width, height }: Props) => {
  return (
    <Image
      src={PROFILE}
      alt="ahmed"
      width={width}
      height={height}
      style={{ borderRadius: 100 }}
      className="shadow-md sm:animate-left_right"
    />
  );
};

interface TitleProps {
  title: string;
}
export const SectionTitle = ({ title }: TitleProps) => {
  return (
    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-400 to-slate-900 text-left mb-4 sm:text-3xl">
      {title}
    </h2>
  );
};
