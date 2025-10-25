import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import App from "../App/App";
import { Search } from "lucide-react";

const Apps = () => {
  const data = useLoaderData();
  


  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();

  const searchApps = term
    ? data.filter((app) => app.title.toLowerCase().includes(term))
    : data;

  console.log(searchApps);

  return (
    <div>
      <div className="text-center m-20">
        <h1 className="text-5xl font-bold mb-5">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between p-10">
        <p>(132) Apps Found</p>
        <label className="input">
          <Search />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>
      <Suspense fallback={<spa>Loading...</spa>}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 container mx-auto">
          {searchApps.map((book) => (
            <App key={book.id} book={book}></App>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Apps;
