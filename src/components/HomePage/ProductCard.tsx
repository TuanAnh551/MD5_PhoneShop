import React from "react";

interface ProductProps {
  product: {
    name: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    installment: boolean;
    smemberDiscount: number;
    studentDiscount?: number;
  };
}

function ProductCard({ product }: ProductProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price-info">
        <span className="current-price">{product.price.toLocaleString()}đ</span>
        <span className="old-price">{product.oldPrice.toLocaleString()}đ</span>
      </div>
      <div className="discount-badge">Giảm {product.discount}%</div>
      {product.installment && (
        <div className="installment-badge">Trả góp 0%</div>
      )}
      <p>Smember giảm thêm đến {product.smemberDiscount.toLocaleString()}đ</p>
      {product.studentDiscount && (
        <p>
          S-Student giảm thêm đến {product.studentDiscount.toLocaleString()}đ
        </p>
      )}
      <p>
        Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng
      </p>
    </div>
  );
}

export default ProductCard;
