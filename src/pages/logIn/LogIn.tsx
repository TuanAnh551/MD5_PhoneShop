import React from 'react';
import './login.scss';



const Login: React.FC = () => {
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
  };
  return (
    <>
      <div className="container">
        <div className="image"></div>
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit">Log in</button>
          </form>

          <div className="social-buttons">
            <button>GitHub</button>
            <button>Twitter</button>
          </div>

          <div className="links">
            <a href="#">Forgot your password?</a>
            <br />
            <a href="#">Create account</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;