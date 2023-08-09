"use client";
import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <HashLoader color="#0f172a" />
    </div>
  );
};

export default loading;
