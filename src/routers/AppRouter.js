import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomeScreen from "../modules/HomeScreen";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};

export default AppRouter;
