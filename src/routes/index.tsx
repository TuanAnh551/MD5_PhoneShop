import About from "@/pages/About";
import Home from "@/pages/Home";
import HomePage from "@/pages/HomePage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "@/components/Test";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="" element={<HomePage></HomePage>}></Route>
          <Route path="test" element={<Test></Test>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
