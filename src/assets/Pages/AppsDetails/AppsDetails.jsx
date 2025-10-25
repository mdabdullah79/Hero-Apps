import { Download, Star, MessageSquareCode } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
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
  return (
    <>
      <div className="p-6">
        <div className="flex p-6 items-center gap-10 border-b border-gray-300">
          <div className="flex-1/3 shadow-sm">
            <img className="w-full" src={image} alt="" />
          </div>
          <div className="flex-10/12">
            <div className="border-b border-gray-500">
              <h1 className=" text-6xl font-bold mb-2.5">{title}</h1>
              <p>
                Developed by{" "}
                <span className="text-blue-600 font-bold">{companyName}</span>
              </p>
            </div>
            <div className="flex items-center gap-20 my-8">
              <div className="flex flex-col items-center">
                <Download size={54} color="#FF8811" />
                <p className="text-[16px]">Downloads</p>
                <h1 className="text-5xl font-extrabold">{downloads}</h1>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Star size={54} color="#FF8811" />
                <p className="text-[16px]">Rating Avg</p>
                <h1 className="text-5xl font-extrabold">{ratingAvg}</h1>
              </div>

              <div className="flex flex-col items-center justify-center">
                <MessageSquareCode size={54} color="#FF8811" />
                <p className="text-[16px]">Reviews</p>
                <h1 className="text-5xl font-extrabold">{reviews}</h1>
              </div>
            </div>
            <button
              onClick={() => setInstall(true)}
              className="bg-[#00D390] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-white"
            >
              {install ? "Installing" : `Install ${size}`}
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
                <XAxis  type="number" />
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
