import HeroHeader from "@/components/HomePage/HeroHeader";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          {/* <Route path="" element={<HomePage></HomePage>}></Route> */}
          <Route path="" element={<HeroHeader></HeroHeader>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
