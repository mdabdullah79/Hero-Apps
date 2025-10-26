import { Download, Star, MessageSquareCode } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const appid = parseInt(id);
  const [install, setInstall] = useState(false);

  const appdata = data.find((app) => app.id === appid);
  const {
    image,
    title,
    companyName,
    downloads,
    reviews,
    ratingAvg,
    size,
    longDescription,
    ratings,
  } = appdata;
  console.log(image);

  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem("installed"));
    const isInstalled = installedList.some((app) => app.id === appdata.id);
    if (isInstalled) {
      setInstall(true);
    }
  }, [appdata.id]);

  const handleInstall = () => {
    setInstall(true);

    const exitingList = JSON.parse(localStorage.getItem("installed"));
    let updatedList = [];
    if (exitingList) {
      const isDuplicate = exitingList.some((app) => app.id === appdata.id);
      if (isDuplicate) {
        toast("Already Installed");
        return;
      }
      toast(`${title} Installing...`);
      updatedList = [...exitingList, appdata];

      console.log(isDuplicate);
    } else {
      updatedList.push(appdata);
    }

    localStorage.setItem("installed", JSON.stringify(updatedList));
  };
  return (
    <>
      <div className="p-1 md:p-6">
        <div className="flex  items-center p-3 justify-between gap-10 border-b border-gray-300">
          <div className="flex-1/3 shadow-sm container">
            <img className="w-full" src={image} alt="" />
          </div>
          <div className="flex-10/12">
            <div className="border-b border-gray-500">
              <h1 className="text-2xl md:text-6xl font-bold mb-2.5">{title}</h1>
              <p className="text-[10px] md:text-2xl">
                Developed by{" "}
                <span className="text-blue-600 font-bold">{companyName}</span>
              </p>
            </div>
            <div className="flex items-center gap-5 md:gap-20 my-3 md:my-8">
              <div className="flex flex-col items-center">
                <Download size={25} md:size={54} color="#FF8811" />
                <p className="text-[10px] md:text-[16px]">Downloads</p>
                <h1 className="text-2xl md:text-5xl font-extrabold">
                  {downloads}
                </h1>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Star size={25} md:size={54} color="#FF8811" />
                <p className="text-[10px] md:text-[16px]">Rating Avg</p>
                <h1 className="text-2xl md:text-5xl font-extrabold">
                  {ratingAvg}
                </h1>
              </div>

              <div className="flex flex-col items-center justify-center">
                <MessageSquareCode size={25} md:size={54} color="#FF8811" />
                <p className="text-[10px] md:text-[16px]">Reviews</p>
                <h1 className="text-2xl md:text-5xl font-extrabold">
                  {reviews}
                </h1>
              </div>
            </div>
            <button
              onClick={handleInstall}
              className="bg-[#00D390] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-white"
            >
              {install ? "Installed" : `Install ${size}`}
            </button>
          </div>
        </div>
      </div>
      {/* Bar Chart */}
      <div className="space-y-5 p-5">
        <h1 className="text-4xl font-bold mb-5">Ratings</h1>
        <div className="border-b border-gray-300">
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[...ratings].reverse()}
                layout="vertical"
                margin={{ top: 0, right: 10, left: 10, bottom: 20 }}
              >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={60} />
                <Tooltip />
                <Bar
                  dataKey="count"
                  fill="#FF8811"
                  activeBar={<Rectangle fill="green" stroke="green" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Decription */}
      <div className="p-5">
        <h1 className="text-4xl font-bold mb-5">Description</h1>
        <p className="text-justify text-[16px] text-[#627382]">
          {longDescription}
        </p>
      </div>
    </>
  );
};

export default AppsDetails;
