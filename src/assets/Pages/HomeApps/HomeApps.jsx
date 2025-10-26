import React, { Suspense } from "react";
import App from "../App/App";

const Books = ({ data }) => {
  return (
    <div>
      <h1>Books</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 container mx-auto p-3">
          {data.map((book) => (
            <App key={book.id} book={book}></App>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
