import React from "react";
import "./home.scss"; // Đảm bảo bạn tạo file CSS riêng
import { Link, Outlet } from "react-router-dom";





const HomeAdmin: React.FC = () => {
  return (
    <div className="admin-home">
      <aside className="sidebar">
        <h2>Xin chào admin</h2>
        <nav>
          <ul>
            <li><Link to="/admin"> Home </Link></li>
            <li > <Link to="/admin/category">Category List </Link></li>
            <li><Link to="/admin/product"> Product List </Link></li>
            <li> <Link to="/admin/user">User List </Link></li>
            <li> <Link to="/admin/order/all">Order List </Link></li>
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
