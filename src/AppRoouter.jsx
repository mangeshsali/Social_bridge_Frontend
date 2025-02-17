import React from "react";
import MainLayout from "./Pages/MainLayout";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from "react-router";
import Login from "./Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Feed from "./Pages/Feed";

const AppRoouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoouter;
