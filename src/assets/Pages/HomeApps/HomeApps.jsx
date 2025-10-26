import React, { Suspense } from "react";
import App from "../App/App";

const Books = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Trending Apps</h1>
        <p className="text-[10px] md:text-[16px]">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 container mx-auto p-3 mt-5">
          {data.map((book) => (
            <App key={book.id} book={book}></App>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
