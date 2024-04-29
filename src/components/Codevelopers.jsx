import { useState } from "react";
import { codevelopers } from "../helper/data";

const Codevelopers = () => {
  const [showCodeveloper, setShowCodeveloper] = useState(0);

  return (
    <div className="">
      <p className="text-red-600 text-lg font-semibold">
        Who are Co-Developers <span className="text-blue-700">&</span> What they
        are saying
      </p>
      <ul className="text">
        {codevelopers.map(({ avatar, name, title, quote }, index) =>
          showCodeveloper == index ? (
            <li className="text-center" key={index}>
              <div>
                <p>{quote}</p>
              </div>
              <div className="text-center">
                <img
                  src={avatar}
                  className="w-[150px] m-auto rounded-full"
                  alt=""
                />
                <h5>{name}</h5>
                <h6>{title}</h6>
              </div>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
};

export default Codevelopers;
