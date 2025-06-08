import React from "react";
import MainLayout from "./Pages/MainLayout";
import NotFound from "./Pages/NotFound";
import { Navigate, Route, Routes } from "react-router";
import Login from "./Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Feed from "./Pages/Feed";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import ChatPage from "./Pages/ChatPage";
import Request from "./Pages/Request";
import PostDetails from "./Pages/PostDetails";
import LandingPage from "./Pages/LandingPage";

const AppRoouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/message" element={<ChatPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/request" element={<Request />} />
        </Route>
      </Route>
      <Route path="/landing" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoouter;
