import HeroHeader from "@pages/home/HomePage/HeroHeader";
import Profile from "@/pages/home/users/profile/Profile";

import Home from "@/pages/Home";
import Cart from "@/pages/home/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderHistory from "@/pages/home/users/orderHistory/OrderHistory";
import Login from "@/pages/logIn/LogIn";
import Register from "@/pages/logIn/Register";
import Admin from "@/pages/admin/home/HomeAdmin";
import Category from "@/pages/admin/category/CategoryAdmin";
import ProductAdmin from "@/pages/admin/product/ProductAdmin";
import UserAdmin from "@/pages/admin/user/UsersAdmin";
import OrderAdmin from "@/pages/admin/order/OdersAdmin";
import All from "@/pages/admin/order/All";
import Confirmed from "@/pages/admin/order/Confirmed";
import Success from "@/pages/admin/order/Success";
import Delivered from "@/pages/admin/order/Delivered";
import Waitting from "@/pages/admin/order/Waitting";
import Cancel from "@/pages/admin/order/Cancel";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="" element={<HeroHeader></HeroHeader>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Route>
        <Route path="/profile" element={<Profile></Profile>}>
          <Route
            path="/profile/orderhistory"
            element={<OrderHistory></OrderHistory>}
          />
        </Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/admin" element={<Admin></Admin>}>
          <Route path="/admin/category" element={<Category></Category>} />
          <Route
            path="/admin/product"
            element={<ProductAdmin></ProductAdmin>}
          />
          <Route path="/admin/user" element={<UserAdmin></UserAdmin>} />
          <Route path="/admin/order" element={<OrderAdmin></OrderAdmin>}>
            <Route path="/admin/order/all" element={<All></All>} />
            <Route
              path="/admin/order/confirmed"
              element={<Confirmed></Confirmed>}
            />
            <Route path="/admin/order/success" element={<Success></Success>} />
            <Route
              path="/admin/order/delivered"
              element={<Delivered></Delivered>}
            />
            <Route
              path="/admin/order/waitting"
              element={<Waitting></Waitting>}
            />
            <Route path="/admin/order/cancel" element={<Cancel></Cancel>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
