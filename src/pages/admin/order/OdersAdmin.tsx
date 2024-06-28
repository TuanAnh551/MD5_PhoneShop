import React from "react";
import "../category/category.scss";
import { Link, Outlet } from "react-router-dom";



const ProductAdmin: React.FC = () => {
 
  

 

  return (
    <div className="category-list">
      <h1>ORDER</h1>
      <h2>Tất cả các Order</h2>
      <div className="order-filters">
        <button > <Link to="/admin/order/all">Tất cả</Link></button>
        <button> <Link to="/admin/order/waitting"> Chờ xác nhận</Link></button>
        <button> <Link to="/admin/order/confirmed"> Đã xác nhận</Link></button>
        <button> <Link to="/admin/order/success">Đang vận chuyển</Link></button>
        <button> <Link to="/admin/order/delivered"> Đã giao hàng</Link></button>
        <button> <Link to="/admin/order/cancel">Đã hủy</Link></button>
      </div>

      <div className="home_page_container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ProductAdmin;
