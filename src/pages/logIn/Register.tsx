import React, { useState } from "react";
import "./register.scss";
import { useTranslation } from "react-i18next";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import { showToast } from "../../util/toast.ts";
import apis from "@/apis/index.ts";


export default function Register() {
  const { t } = useTranslation();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

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
      const response = await apis.register.registerUser(formData);
      showToast.success(response.data.message);
      console.log(response);

      setTimeout(() => {
        setSuccessDialogOpen(true);
      }, 3000); 
    } catch (err) {
      showToast.error(err.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target; // Sửa đổi ở đây để lấy tên của trường input
    setTouched({ ...touched, [name]: true });
  };
  const handleCloseSuccessDialog = () => {
    setSuccessDialogOpen(false);
  };

  return (
    <div className="wrapper">
      <div id="fui-toast"></div>
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
                id="userName"
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
              {isSubmitting ? t("helloo") : t("Register")}
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
      <Dialog open={successDialogOpen} onClose={handleCloseSuccessDialog}>
        <DialogTitle>Registration Successful</DialogTitle>
        <DialogContent>
          <p>You have successfully registered.</p>
        </DialogContent>
        <DialogActions>
          <Button
            component="a"
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tới gmail để xác thực
          </Button>
          <Button onClick={handleCloseSuccessDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
