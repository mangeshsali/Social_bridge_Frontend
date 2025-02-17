import React from "react";
import MainLayout from "./Pages/MainLayout";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from "react-router";

const AppRoouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoouter;
