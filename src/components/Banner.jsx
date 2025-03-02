import React from "react";

const Banner = ({ count }) => {
  return (
    <div className="p-8 text-left">
      <h1>Search</h1>
      <div className="flex">
        <h2 className="pe-3">Search results: </h2>
        <h3>{count}</h3>
      </div>
    </div>
  );
};

export default Banner;
