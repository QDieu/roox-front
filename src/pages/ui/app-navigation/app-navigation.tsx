import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserPageConnector } from "../user-page-connector";
import { SidebarConnector } from "../sidebar-connector";
import { UserProfilePageConnector } from "../user-profile-page-connector";

export const AppNavigation = () => {
  return (
    <div>
      <SidebarConnector />
      <Routes>
        <Route path="/" element={<UserPageConnector />} />
        <Route path="/user" element={<UserProfilePageConnector />} />
      </Routes>
    </div>
  );
};
