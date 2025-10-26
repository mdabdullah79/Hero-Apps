import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-6xl font-bold">L</h1>
      </div>
      <div className="w-10 mx-3">
        <img
          className='animate-spin style={{ animationDuration: "10s" }} '
          src="./logo.png"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-6xl font-bold mr-1.5">ading</h1>
      </div>
    </div>
  );
};

export default Loader;
