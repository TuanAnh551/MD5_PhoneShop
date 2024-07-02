import React, { useState } from "react";
import "./register.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Register() {
  const { t } = useTranslation();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({
    userName: false,
    phone: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    email: "",
    date: "",
    password: "",
    confirmPassword: "",
  });

  // Cập nhật state dựa trên input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Xử lý submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError(t("confirmPassword"));
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await axios.post("/api/api/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      // Xử lý sau khi đăng ký thành công, ví dụ:
      // showSuccessMessage();
      // redirectToLogin();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Check if the error response has a data property
        if (error.response.data) {
          // If the data property is a string, display it directly
          if (typeof error.response.data === "string") {
            setError(error.response.data);
          }
          // If the data property is an object, try to display its 'message' property
          else if (
            typeof error.response.data === "object" &&
            error.response.data.message
          ) {
            setError(error.response.data.message);
          }
          // If the data property is neither a string nor an object with a 'message' property, display a generic error message
          else {
            setError(t("t"));
          }
        }
        // If the error response does not have a data property, display a generic error message
        else {
          setError(t("b"));
        }
        console.log(error);
      } else {
        setError(t("c"));
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target; // Sửa đổi ở đây để lấy tên của trường input
    setTouched({ ...touched, [name]: true });
  };

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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="userName"
                placeholder={t("name")}
                value={formData.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.userName && !formData.userName && (
                <span className="error-message" style={{ color: "red" }}>
                  {t("Please")}
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder={t("number")}
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.phone && !formData.phone && (
                <span className="error-message" style={{ color: "red" }}>
                  {t("Please")}
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t("emailenter")}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {touched.email && !formData.email && (
                <span className="error-message" style={{ color: "red" }}>
                  {t("Please")}
                </span>
              )}
            </div>

            <div className="form-group">
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Ngày sinh"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder={t("password")}
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.password && !formData.password && (
                <span className="error-message" style={{ color: "red" }}>
                  {t("Please")}
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder={t("confirm_password")}
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {error && (
                <span className="error-message" style={{ color: "red" }}>
                  {error}
                </span>
              )}
              {touched.confirmPassword && !formData.confirmPassword && (
                <span className="error-message" style={{ color: "red" }}>
                  {t("Please")}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("Registering...") : t("Register")}
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
