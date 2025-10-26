import React, { useEffect, useState } from "react";

const Installation = () => {
  const [sortOrder, setsortOrder] = useState("none");
  const [installed, setInstalled] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installed"));
    if (savedList) setInstalled(savedList);
  }, []);

  const parseDownloads = (value) => {
    if (typeof value === "string") {
      if (value.endsWith("M")) return parseFloat(value) * 1000000;
      if (value.endsWith("K")) return parseFloat(value) * 1000;
      return parseFloat(value);
    }
    return value; // already a number
  };

  const sortedOrder = (() => {
    if (sortOrder === "download-asc") {
      return [...installed].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    }

    if (sortOrder === "download-desc") {
      return [...installed].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    }

    return installed; // default order
  })();

  const handleUnintall=(id)=>{
    const exitingList = JSON.parse(localStorage.getItem('installed'))
    const updatedList = exitingList.filter((p)=>p.id !== id)
    setInstalled(updatedList);
    localStorage.setItem('installed',JSON.stringify(updatedList));
  }
  return (
    <>
      <div className="m-10 text-center">
        <h1 className="text-5xl font-bold m-5">Your Installed Apps</h1>
        <p className="text-gray-400 font-thin">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex items-center justify-between p-4">
        <h1 className="font-bold">{installed.length} Apps Found</h1>
        <label className="w-[200px]">
          <select
            name=""
            id=""
            className="select select-bordered"
            onChange={(e) => setsortOrder(e.target.value)}
          >
            <option value="none">Sort By Download</option>
            <option value="download-asc">High-Low</option>
            <option value="download-desc">Low-High</option>
          </select>
        </label>
      </div>

      <div className="p-5 h-screen">
        {sortedOrder.map((p) => (
          <div className="bg-white px-8 py-3 rounded-2xl shadow-sm flex items-center justify-between m-5 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[200px] h-[200px]">
                <img src={p.image} alt="" />
              </div>

              <div>
                <h2 className="text-3xl font-bold">{p.title}</h2>
                <div className="flex items-center gap-5">
                  <p>{p.downloads}</p>
                  <p>5</p>
                  <p>258MB</p>
                </div>
              </div>
            </div>

            <div>
              <button onClick={()=>handleUnintall(p.id)} className="bg-[#00D390] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-white">
                Unistall
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Installation;
