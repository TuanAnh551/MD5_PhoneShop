import React, { useState } from "react";
import "./home.scss"; // Đảm bảo bạn tạo file CSS riêng
import { Link, Outlet } from "react-router-dom";





const HomeAdmin: React.FC = () => {
   const [selectedFilter, setSelectedFilter] = useState("admin");

   const handleFilterClick = (filter: string) => {
     setSelectedFilter(filter);
   };
  return (
    <div className="admin-home">
      <aside className="sidebar">
        <h2>Xin chào admin</h2>
        <nav>
          <ul>
            <li
              className={selectedFilter === "admin" ? "selected" : ""}
              onClick={() => handleFilterClick("admin")}
            >
              <Link to="/admin">Home</Link>
            </li>

            <li
              className={selectedFilter === "category" ? "selected" : ""}
              onClick={() => handleFilterClick("category")}
            >
              {" "}
              <Link to="/admin/category">Category List </Link>
            </li>
            <li
              className={selectedFilter === "product" ? "selected" : ""}
              onClick={() => handleFilterClick("product")}
            >
              <Link to="/admin/product"> Product List </Link>
            </li>
            <li
              className={selectedFilter === "user" ? "selected" : ""}
              onClick={() => handleFilterClick("user")}
            >
              {" "}
              <Link to="/admin/user">User List </Link>
            </li>
            <li
              className={selectedFilter === "order" ? "selected" : ""}
              onClick={() => handleFilterClick("order")}
            >
              {" "}
              <Link to="/admin/order/all">Order List </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="admin-header">
          <div className="search-bar">
            <input type="text" placeholder="Search for projects" />
          </div>
          <div className="header-icons">
            <span className="theme-toggle">🌙</span>
            <span className="notifications">🔔</span>
            <span className="user-avatar">👤</span>
          </div>
        </header>

        <div className="home_page_container">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
};

export default HomeAdmin;
