import { useEffect, useState } from "react";
import { stats } from "../helper/data";

const HomeStates = () => {
  console.log(stats);

  return (
    <div className="flex justify-evenly w-full sm:w-10/12 mt-8">
      {stats.map(({data, title}, index) => (
      <div key={index} className="text-center">
        <h1 className="text-5xl text-blue-700 font-semibold">{data}</h1>
        <p className="text-lg text-blue-900">{title}</p>
      </div>
      ))}
    </div>
  );
};

export default HomeStates;
