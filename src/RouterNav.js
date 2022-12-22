import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./compnents/comon/Header";
import Footer from "./compnents/comon/Footer";
import AddSectors from "./compnents/AddSectors";
import ListSectors from "./compnents/ListSectors";
const RouterNav = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AddSectors />}></Route>
        <Route path="/all" element={<ListSectors />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default RouterNav;
