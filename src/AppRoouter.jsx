import React from "react";
import MainLayout from "./Pages/MainLayout";
import NotFound from "./Pages/NotFound";
import { Route, Routes } from "react-router";
import Login from "./Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Feed from "./Pages/Feed";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import ChatPage from "./Pages/ChatPage";
import Request from "./Pages/Request";

const AppRoouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/message" element={<ChatPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/request" element={<Request />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoouter;
