import React, { useState } from "react";
import "../category/category.scss";
import { Link, Outlet } from "react-router-dom";



const ProductAdmin: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterClick = (filter:string) => {
    setSelectedFilter(filter);
  };

 

  return (
    <div className="category-list">
      <h1>ORDER</h1>
      <h2>Tất cả các Order</h2>
      <div className="order-filters">
        <button
          className={selectedFilter === "all" ? "selected" : ""}
          onClick={() => handleFilterClick("all")}
        >
          <Link to="/admin/order/all">Tất cả</Link>
        </button>
        <button
          className={selectedFilter === "waiting" ? "selected" : ""}
          onClick={() => handleFilterClick("waiting")}
        >
          <Link to="/admin/order/waitting">Chờ xác nhận</Link>
        </button>
        <button
          className={selectedFilter === "confirmed" ? "selected" : ""}
          onClick={() => handleFilterClick("confirmed")}
        >
          <Link to="/admin/order/confirmed"> Đã xác nhận</Link>
        </button>
        <button
          className={selectedFilter === "success" ? "selected" : ""}
          onClick={() => handleFilterClick("success")}
        >
          <Link to="/admin/order/success">Đang vận chuyển</Link>
        </button>
        <button
          className={selectedFilter === "delivered" ? "selected" : ""}
          onClick={() => handleFilterClick("delivered")}
        >
          <Link to="/admin/order/delivered"> Đã giao hàng</Link>
        </button>
        <button
          className={selectedFilter === "cancel" ? "selected" : ""}
          onClick={() => handleFilterClick("cancel")}
        >
          <Link to="/admin/order/cancel">Đã hủy</Link>
        </button>
      </div>

      <div className="home_page_container">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ProductAdmin;
