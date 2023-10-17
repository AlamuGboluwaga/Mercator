import React from "react";


import { Link } from "react-router-dom";
const NavigationBar = () => {
  const menu = [
    "home",
    "products",
    "cart",
    "gallery",
    "contact",
    "about",
    "loign",
  ];
  return (
    <>
      <div className="navbar">
        <div className="title-div">
  
          <h1 className="title">Mercrato</h1>
        </div>
        <ul className="menu">
          {menu.map((item, index) => (
            <Link
              className="link"
              key={index}
              to={`${
                index === 0
                  ? "home"
                  : index === 1
                  ? "products"
                  : index === 2
                  ? "cart"
                  : index === 3
                  ? "gallery"
                  : index === 4
                  ? "contactus"
                  : index === 5
                  ? "aboutus"
                  : index === 6
                  ? "signin"
                  : null
              }`}
            >
              <li className="menu-list">{item[0].toUpperCase() + item.slice(1)}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
