import React from "react";
import { Link } from "react-router-dom";
const navigation = [
  {
    title: "Home",
    path: "dashboard",
  },
  {
    title: "Products",
    path: "dashboard/products",
  },
  {
    title: "About",
    path: "dashboard/about",
  },
];

const AppNav = () => {
  return (
    <nav className="w-full bg-blue-400 px-5 flex justify-between">
      <div className="flex gap-8">
        <div>
          <Link to="/dashboard">CO-DEVELOPER</Link>
        </div>
        <ul className="flex gap-3">
          {navigation.map(({ title, path }, index) => {
            return (
              <li key={index}>
                <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <Link to="/login">LogOut</Link>
      </div>
    </nav>
  );
};

export default AppNav;
