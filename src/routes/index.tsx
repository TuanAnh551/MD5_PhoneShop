import HeroHeader from "@/components/HomePage/HeroHeader";

import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="" element={<HeroHeader></HeroHeader>}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
