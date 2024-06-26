import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
  selected: boolean;
}

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "iPhone 13-Xanh duong",
      price: 13890000,
      originalPrice: 18990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/d/_/d_ng_3.jpg",
      quantity: 1,
      selected: false,
    },
    {
      id: 2,
      name: "iPhone 13-Xanh duong",
      price: 13890000,
      originalPrice: 18990000,
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:350:0/q:80/plain/https://cellphones.com.vn/media/catalog/product/d/_/d_ng_3.jpg",
      quantity: 1,
      selected: false,
    },
    // Thêm các sản phẩm khác ở đây
  ]);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSelectToggle = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const totalPrice = cartItems
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const anyItemSelected = cartItems.some((item) => item.selected);

  return (
    <div className="cart-page">
      <header>
        <button onClick={handleBackClick}>←</button>
        <h1>Giỏ hàng của bạn</h1>
      </header>

      {cartItems.map((item) => (
        <div key={item.id} className="main-product">
          <input
            type="checkbox"
            checked={item.selected}
            onChange={() => handleSelectToggle(item.id)}
          />
          <img src={item.image} alt={item.name} />
          <div>
            <h2>{item.name}</h2>
            <p>{item.price.toLocaleString()} đ</p>
            <p>
              <s>{item.originalPrice.toLocaleString()} đ</s>
            </p>
          </div>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
          </div>
        </div>
      ))}

      <footer>
        <p>Tạm tính: {totalPrice.toLocaleString()} đ</p>
        <button
          className={anyItemSelected ? "active" : ""}
          disabled={!anyItemSelected}
        >
          Mua ngay
        </button>
        {anyItemSelected && (
          <button className="delete">Xóa sản phẩm đã chọn</button>
        )}
      </footer>
    </div>
  );
};

export default CartPage;
