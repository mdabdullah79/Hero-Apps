import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import App from "../App/App";
import {  Search } from "lucide-react";
import ErrorPage from "../ErrorPage/ErrorPage";
import AppNotFound from "../AppNotFound/AppNotFound";
import Loader from "../Loader/Loader";
import useApps from "../../Components/Hooks/useApps";

const Apps = () => {
  const {data,loading} = useApps();

  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();

  const searchApps = term
    ? data.filter((app) => app.title.toLowerCase().includes(term))
    : data;

  console.log(searchApps);

  return (
    <div>
      <div className="text-center m-10 md:m-20">
        <h1 className="text-2xl md:text-5xl font-bold mb-5">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between p-10">
        <p className="">{searchApps.length} Apps Found</p>
        <label className="input max-w-44">
          <Search />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>
      
      
        {
        loading
        ?<Loader></Loader>
        
        :searchApps.length === 0 ? (
          <AppNotFound></AppNotFound>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 container mx-auto p-3">
            {searchApps.map((book) => (
              <App key={book.id} book={book} />
            ))}
          </div>
        )}
    </div>
  );
};

export default Apps;
