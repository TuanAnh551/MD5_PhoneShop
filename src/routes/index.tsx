import HeroHeader from "@pages/home/HomePage/HeroHeader";
import Profile from "@/pages/home/users/profile/Profile";
import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderHistory from "@/pages/home/users/orderHistory/OrderHistory";
import Login from "@/pages/logIn/LogIn";
export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="" element={<HeroHeader></HeroHeader>} />
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
