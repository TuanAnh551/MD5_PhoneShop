import React from "react";
import "./register.scss";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <div className="signup-container">
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlBwq5FHNWjCV-FMm807LHT3qPNEuzGAD0g&s"
            alt="Workspace"
          />
        </div>
        <div className="form-container">
          <h2>{t("Register")}</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("name")}
                required
              />
              <span className="error-message" style={{ color: "red" }}>
                {t("Please")}
              </span>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder={t("number")}
                required
              />
              <span className="error-message" style={{ color: "red" }}>
                {t("Please")}
              </span>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("emailenter")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                id="birthday"
                name="birthday"
                placeholder="Ngày sinh"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder={t("password")}
                required
              />
              <span className="error-message" style={{ color: "red" }}>
                {t("Please")}
              </span>
            </div>
            <div className="form-group">
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder={t("confirm_password")}
                required
              />
              <span className="error-message" style={{ color: "red" }}>
                {t("Please")}
              </span>
            </div>

            <button type="submit" className="submit-btn">
              {t("Register")}
            </button>
          </form>
          <div className="social-signup">
            <button className="social-btn github">
              <i className="fab fa-github"></i> Google
            </button>
            <button className="social-btn twitter">
              <i className="fab fa-twitter"></i> Zalo
            </button>
          </div>
         
          <p className="login-link">
            {t("already")}
            <a href="/login">{t("Login")}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
