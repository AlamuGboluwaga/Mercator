import React, { useState } from "react";
import Logo from "../images/logo2.svg";
import Transfer from "./Transfer";

const UserProfile = () => {
  const menuItems = [
    "home",
    "transfer",
    "beneficiary",
    "transaction",
    "logout",
  ];
  const [data, setData] = useState();
  const handleClick = (index) => {
    return `{${
      index === 0
        ? setData(1)
        : index === 1
        ? setData(<Transfer />)
        : index === 2
        ? setData(<Transfer />)
        : index === 3
        ? setData(<Transfer />)
        : index === 4
        ? setData(<Transfer />)
        : null
    }}`;
  };

  return (
    <div className="userprofile-div">
      <div className="user-left-div">
        <img src={Logo} alt="Logo" className="logo" />
        <ul className="menu-list">
          {menuItems.map((items, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              {items[0].toLocaleUpperCase()+ items.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      <div className="user-right-div">{data}</div>
    </div>
  );
};

export default UserProfile;
