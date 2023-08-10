const Hero = () => {
  return (
    <div className="hero relative z-40 px-2 flex justify-center items-center w-full bg-gradient-to-b from-slate-100 to-slate-50 sm:px-10">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-slate-900 md:text-9xl animate-left_right">
          Astore.
        </h1>
        <h3 className="text-4xl font-bold text-slate-700 md:text-6xl animate-right_left">
          Software Engineer
        </h3>
        <p className="text-slate-700 mt-7 md:text-base animate-left_right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="absolute flex bottom-10 left-1/2 -translate-x-1/2 w-6 h-12 rounded-2xl border border-solid border-slate-300">
        <span className="m-auto bg-slate-300 w-1 h-2 rounded-sm animate-bounce delay-150"></span>
      </div>
    </div>
  );
};

export default Hero;
