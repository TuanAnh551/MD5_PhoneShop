import HeroHeader from "@pages/home/HomePage/HeroHeader";
import Profile from "@/pages/home/users/profile/Profile";

import Home from "@/pages/Home";
import Cart from "@/pages/home/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderHistory from "@/pages/home/users/orderHistory/OrderHistory";
import Login from "@/pages/logIn/LogIn";
import ProductDetail from "@/pages/home/ProductDetail/ProductDetail";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="" element={<HeroHeader></HeroHeader>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route
            path="/detail"
            element={<ProductDetail></ProductDetail>}
          ></Route>
        </Route>
        <Route path="/profile" element={<Profile></Profile>}>
          <Route
            path="/profile/orderhistory"
            element={<OrderHistory></OrderHistory>}
          />
        </Route>
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </BrowserRouter>
  );
}
