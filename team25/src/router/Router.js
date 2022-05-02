import React from "react";
import { Route, Routes } from "react-router-dom";
import AddWaste from "../pages/add-waste/AddWaste";
import { Dashboard } from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Login from "../pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addwaste" element={<AddWaste />} />
    </Routes>
  );
};

export default Router;
