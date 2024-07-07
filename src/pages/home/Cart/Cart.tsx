import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { StoreType } from "@/stores/slices";
import apis from "@/apis";

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
  const [total, setTotal] = useState(0);
const userStore = useSelector((store: StoreType) => store.userStore);
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState<ShoppingCart[]>([]);
 

 useEffect(() => {
   const loadActiveCart = async () => {
     if (userStore?.data?.id) {
       try {
         const res = await apis.cart.getCart(userStore?.data?.id);
         console.log(res.data);
         setActiveCart(res);
         setTotal(calculateTotal(res.data));
       } catch (error) {
         console.error("Failed to load active cart:", error);
       }
     }
   };

   loadActiveCart();
 }, [userStore?.data?.id]);

  const handleBackClick = () => {
    navigate("/");
  };
  const calculateTotal = (cartItems: any[]) => {
    return cartItems.reduce((total, item) => {
      return total + item.productVariant.price * item.quantity;
    }, 0);
  };
  const handleQuantityChange = (itemId: number, change: number) => {
    const updatedCartData = activeCart.data.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setActiveCart({ ...activeCart, data: updatedCartData });
    const newTotal = calculateTotal(updatedCartData);
    setTotal(newTotal);
    console.log("Updated total:", newTotal);
    // Ở đây bạn cũng nên gọi API để cập nhật số lượng trên server
  };

  console.log(total);

 
const { t } = useTranslation();
  if (!activeCart || !activeCart.data || activeCart.data.length === 0) {
    return <div>Không có sản phẩm trong giỏ hàng.</div>;
  }
 console.log(activeCart);
  
  return (
    <div className="cart-page">
      <header>
        <button onClick={handleBackClick}>←</button>
        <h1>{t("mycart")}</h1>
      </header>

      {activeCart.data.map((item) => (
        <div key={item.id} className="main-product">
          <input
            type="checkbox"
            checked={item.selected}
            // onChange={() => handleSelectToggle(item.id)}
          />
          <img src={item.productVariant.image} alt={item.product.name} />
          <div>
            <h2>{item.product.name}</h2>
            <p>{item.productVariant.price.toLocaleString()} đ</p>
            {/* Giả sử bạn có giá gốc để hiển thị, bạn có thể thêm vào đây */}
          </div>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
          </div>
          <p>
            Thành tiền:
            {(item.productVariant.price * item.quantity).toLocaleString()} đ
          </p>
        </div>
      ))}

      <div className="cart-total">
        <h3>Tổng cộng: {total.toLocaleString()} đ</h3>
        <button>{t("checkout")}</button>
      </div>

    </div>
  );
};

export default CartPage;
