import { useState } from "react";
import { codevelopers } from "../helper/data";

const Codevelopers = () => {
  const [showCodeveloper, setShowCodeveloper] = useState(0);

  return (
    <div className="mt-8 w-full text-center sm:w-6/12">
      <p className="text-red-600 text-lg font-semibold">
        Who are Co-Developers <span className="text-blue-700">&</span> What they
        are saying
      </p>
      <ul className="text">
        {codevelopers.map(({ avatar, name, title, quote }, index) =>
          showCodeveloper == index ? (
            <li className="text-center mt-4" key={index}>
              <div>
                <p>{quote}</p>
              </div>
              <div className="text-center">
                <img
                  src={avatar}
                  className="w-[150px] m-auto rounded-full mt-8"
                  alt=""
                />
                <h5 className="mt-3 mb-1 text-xl font-semibold">{name}</h5>
                <h6 className="text-xl">{title}</h6>
              </div>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
      <ul className="flex gap-4 justify-center mt-4">
        {codevelopers.map((item, index) => {
          return <li key={index}>
            <button
              className={` w-4 h-4 rounded-full ring-offset-2 focus:ring ring-indigo-700 ${
                showCodeveloper == index ? "bg-red-400" : "bg-blue-300"
              }`}
              onClick={() => setShowCodeveloper(index)}
            ></button>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Codevelopers;
