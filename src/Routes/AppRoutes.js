import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import Login from "../Components/Login/Login";
import { GuardedRoute } from "./GuardedRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<GuardedRoute />} />
    
          <Route path="/dashboard" element={<Dashboard />} />
        
    
      <Route path="/login" element={<Login />} />
      {/* <Route path="/404" element={<Error404 />} /> */}
    </Routes>
  );
};
