import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Component/Home";
import NavigationBar from "../Component/NavigationBar";
import Singin from "../Component/Singin";
import PageNotFound from "../Component/PageNotFound";
import Logout from "../Component/Logout";
import AboutUs from "../Component/AboutUs";
import Bank from "../Bank";
import UserProfile from "../Component/UserProfile";
import Home1 from "../Component/Home1";
import Transfer from "../Component/Transfer";
const Router = () => {
  return (
    <BrowserRouter className="browser">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="home1" element={<Home1 />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="bank" element={<Bank />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="signin" element={<Singin />} />
        <Route path="logout" element={<Logout />} />
        <Route path="pagenotfound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/pagenotfound" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
