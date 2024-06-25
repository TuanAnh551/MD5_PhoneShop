import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

export default function Home() {
  const { i18n } = useTranslation(); // Destructure i18n from useTranslation
  return (
    <div className="home_page">
      <header>
        Header
        <button
          onClick={() => {
            localStorage.setItem("lng", "en");
            i18n.changeLanguage("en"); // Call changeLanguage on i18n
          }}
        >
          en
        </button>
        <button
          onClick={() => {
            localStorage.setItem("lng", "vi");
            i18n.changeLanguage("vi"); // Call changeLanguage on i18n
          }}
        >
          vi
        </button>
      </header>
      <div className="home_page_container">
        <Outlet></Outlet>
      </div>
      <footer>Footer</footer>
    </div>
  );
}
