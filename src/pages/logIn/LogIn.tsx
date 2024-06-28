import React from "react";
import "./login.scss";

const Login: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="wrapper">
        <div className="containers">
          <img
            className="image"
            src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/cellphones-cong-bo-linh-vat-thuong-hieu-1.jpg"
            alt="Background"
          />
          <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Nhập lại mật khẩu"
                  required
                />
                <span className="error-message" style={{ color: "red" }}>
                  Vui lòng không bỏ trống
                </span>
              </div>

              <button type="submit">Log in</button>
            </form>

            <div className="social-buttons">
              <button>GitHub</button>
              <button>Twitter</button>
            </div>

            <div className="links">
              <a href="#">Forgot your password?</a>
              <br />
              <a href="/register">Create account</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
