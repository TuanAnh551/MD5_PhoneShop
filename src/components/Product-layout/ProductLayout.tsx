import React from "react";
import "./ProductLayout.scss";
import { Link } from "react-router-dom";
export default function Product() {
  return (
    <div>
      <div className="products-grid">
        <Link
          to="/detail"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div className="product-card">
            <img
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png"
              alt="iphone 13"
            />
            <h3>iPhone 13 128GB | Chính hãng VN/A</h3>
            <div className="price-info">
              <span className="current-price">13690000đ</span>
              <span className="old-price">18990000đ</span>
            </div>
            <div className="discount-badge">Giảm 20%</div>
            <div className="installment-badge">Trả góp 0%</div>
            <p className="product-pay">
              Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6
              tháng
            </p>
            <div className="rating">★★★★★</div>
            <span className="like-button">♡</span>
          </div>
        </Link>

      </div>
    </div>
  );
}
