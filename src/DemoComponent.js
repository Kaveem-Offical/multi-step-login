import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DemoComponent = () => {
  const user = useSelector((state) => state.users);
  console.log(user);
  return (
    <div className="bg-slate-900 grid place-content-center h-screen">
      <h1 className="text-5xl font-bold text-gray-400 mb-4">
        Multi Step login form
      </h1>
      <Link to="/signup" className=" mx-auto">
        <button className="m-6 py-3 px-4 w-64  text-white font-bold rounded-lg bg-[#ea4b8b]">
          Click here !
        </button>
      </Link>
    </div>
  );
};

export default DemoComponent;
