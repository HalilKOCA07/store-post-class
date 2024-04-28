import React from "react";
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
    <nav className="w-full bg-blue-400">
      <div>
        <h5>CO-DEVELOPER</h5>
      </div>
    </nav>
  );
};

export default AppNav;
