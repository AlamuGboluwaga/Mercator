import React, { useState } from "react";
import Image from "../images/Finace Building.webp"
import { Link } from "react-router-dom";

const Singin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log("DATA", user);
  const handleSubmit = (e) => {};
  return (
    <>
      <div className="conta">
        <div className="left-div">
          <form action="" onSubmit={handleSubmit} className="input-div">
            <p className="titlte">Signin</p>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Pasword"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button className="btn">Signup</button>
            <div className="signin-here">
              <span>I don't have an account ? </span>
              <Link to={"/home"}>
                <span className="click-here">Click here</span>
              </Link>
            </div>
          </form>
        </div>
        <div className="right-div">
          <img src={Image} alt="Model" className="image" />
        </div>
      </div>
    </>
  );
};

export default Singin;
