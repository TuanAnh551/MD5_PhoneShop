import React from "react";
import "./register.scss";

export default function Register() {
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
          <h2>Đăng ký với</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nhập họ và tên"
                required
              />
              <span className="error-message" style={{ color: "red" }}>
                Vui lòng không bỏ trống
              </span>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Nhập số điện thoại"
                required
              />
              <span className="error-message" style={{ color: "red" }}>
                Vui lòng không bỏ trống
              </span>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập email (không bắt buộc)"
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
                placeholder="Nhập mật khẩu"
                required
              />
              <span className="error-message" style={{ color: "red" }}>
                Vui lòng không bỏ trống
              </span>
            </div>
            <div className="form-group">
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Nhập lại mật khẩu"
                required
              />
              <span className="error-message" style={{ color: "red" }}>
                Vui lòng không bỏ trống
              </span>
            </div>

            <button type="submit" className="submit-btn">
              Đăng ký
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
            Bạn đã có tài khoản?
            <a href="#">Đăng nhập ngay</a>
          </p>
        </div>
      </div>
    </div>
  );
}
