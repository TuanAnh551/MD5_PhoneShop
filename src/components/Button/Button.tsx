// Button.tsx
import React from "react";
import "./Button.scss"; // Đảm bảo bạn đã tạo file Button.scss

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
