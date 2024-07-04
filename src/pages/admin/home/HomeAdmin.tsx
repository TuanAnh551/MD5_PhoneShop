import React, { useEffect, useState } from "react";
import "./home.scss"; // Đảm bảo bạn tạo file CSS riêng
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FormControl, MenuItem, Select } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
const HomeAdmin: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("admin");

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  //translate
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  useEffect(() => {
    const currentLanguage = localStorage.getItem("lng") || "vi";
    setSelectedLanguage(currentLanguage);
    i18n.changeLanguage(currentLanguage);
  }, [i18n]);
  const handleLanguageChange = (event: any) => {
    const newLanguage = event.target.value;
    localStorage.setItem("lng", newLanguage);
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };
  return (
    <div className="admin-home">
      <aside className="sidebar">
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            size="small"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "70px",
              margin: "10px",
            }}
          >
            <MenuItem value="lng" defaultChecked>
              <LanguageIcon />
            </MenuItem>
            <MenuItem value="vi">Vietnamese</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
        <h2>{t("hello")}</h2>
        <nav>
          <ul>
            <li
              className={selectedFilter === "admin" ? "selected" : ""}
              onClick={() => handleFilterClick("admin")}
            >
              <Link to="/admin">{t("homes")}</Link>
            </li>

            <li
              className={selectedFilter === "category" ? "selected" : ""}
              onClick={() => handleFilterClick("category")}
            >
              {" "}
              <Link to="/admin/category"> List {t("category")}</Link>
            </li>
            <li
              className={selectedFilter === "product" ? "selected" : ""}
              onClick={() => handleFilterClick("product")}
            >
              <Link to="/admin/product"> {t("product")}</Link>
            </li>
            <li
              className={selectedFilter === "user" ? "selected" : ""}
              onClick={() => handleFilterClick("user")}
            >
              {" "}
              <Link to="/admin/user"> {t("user")} </Link>
            </li>
            <li
              className={selectedFilter === "order" ? "selected" : ""}
              onClick={() => handleFilterClick("order")}
            >
              {" "}
              <Link to="/admin/order/all"> {t("orders")}</Link>
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
