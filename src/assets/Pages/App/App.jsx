import { Download, Star } from "lucide-react";
import React, { Suspense } from "react";
import { Link } from "react-router";

const App = ({ book }) => {

  const{id,image,title,downloads,ratingAvg,description} = book;

  return (
    <Link to={`/appsdetails/${id}`}>
    <div className="shadow-sm p-3 rounded-2x bg-white">
        <div className="container mx-auto">
            <img className="w-full" src={image} alt="" />
        </div>
        <div className="m-5">
            <h1 className="font-bold text-[16px] md:text-2xl">{title}</h1>
            <p className="text-gray-500 text-justify">{description}</p>
        </div>
        <div className="flex justify-between mt-10">
            <div className="bg-[#FFF0E1] px-2.5  py-2 rounded-[10px] flex items-center justify-center gap-1">
            <Download size={16} strokeWidth={3} color="#FF8811" />
            <span className="text-[#FF8811] font-semibold">{downloads}</span>
            </div>
            <div className="bg-[#FFF0E1] px-2.5  py-2 rounded-[10px] flex items-center justify-center gap-1">
            <Star size={16} strokeWidth={3} color="#FF8811" />
            <span className="text-[#FF8811] font-semibold">{ratingAvg}</span>
            </div>
           
        </div>
    </div>
    </Link>
  );
};

export default App;
