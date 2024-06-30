import React from "react";

import "./ProductList.scss";
import ProductLayout from "@components/Product-layout/ProductLayout";
import { useTranslation } from "react-i18next";

// interface Product {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
//   oldPrice: number;
//   discount: number;
//   installment: boolean;
//   smemberDiscount: number;
//   studentDiscount?: number;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "iPhone 13 128GB | Chính hãng VN/A",
//     image:
//       "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png",
//     price: 13690000,
//     oldPrice: 18990000,
//     discount: 28,
//     installment: true,
//     smemberDiscount: 137000,
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy S24 Ultra 12GB 256GB",
//     image:
//       "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
//     price: 29990000,
//     oldPrice: 33990000,
//     discount: 12,
//     installment: true,
//     smemberDiscount: 300000,
//     studentDiscount: 600000,
//   },
//   {
//     id: 3,
//     name: "Samsung Galaxy S24 Ultra 12GB 256GB",
//     image:
//       "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
//     price: 29990000,
//     oldPrice: 33990000,
//     discount: 12,
//     installment: true,
//     smemberDiscount: 300000,
//     studentDiscount: 600000,
//   },
//   {
//     id: 4,
//     name: "Samsung Galaxy S24 Ultra 12GB 256GB",
//     image:
//       "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
//     price: 29990000,
//     oldPrice: 33990000,
//     discount: 12,
//     installment: true,
//     smemberDiscount: 300000,
//     studentDiscount: 600000,
//   },
//   {
//     id: 5,
//     name: "Samsung Galaxy S24 Ultra 12GB 256GB",
//     image:
//       "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
//     price: 29990000,
//     oldPrice: 33990000,
//     discount: 12,
//     installment: true,
//     smemberDiscount: 300000,
//     studentDiscount: 600000,
//   },
//   {
//     id: 6,
//     name: "Samsung Galaxy S24 Ultra 12GB 256GB",
//     image:
//       "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
//     price: 29990000,
//     oldPrice: 33990000,
//     discount: 12,
//     installment: true,
//     smemberDiscount: 300000,
//     studentDiscount: 600000,
//   },
//   {
//     id: 7,
//     name: "Samsung Galaxy S24 Ultra 12GB 256GB",
//     image:
//       "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
//     price: 29990000,
//     oldPrice: 33990000,
//     discount: 12,
//     installment: true,
//     smemberDiscount: 300000,
//     studentDiscount: 600000,
//   },
//   {
//     id: 8,
//     name: "Samsung Galaxy S24 Ultra 12GB 256GB",
//     image:
//       "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
//     price: 29990000,
//     oldPrice: 33990000,
//     discount: 12,
//     installment: true,
//     smemberDiscount: 300000,
//     studentDiscount: 600000,
//   },
//   {
//     id: 9,
//     name: "Samsung Galaxy S24 Ultra 12GB 256GB",
//     image:
//       "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png",
//     price: 29990000,
//     oldPrice: 33990000,
//     discount: 12,
//     installment: true,
//     smemberDiscount: 300000,
//     studentDiscount: 600000,
//   },
//   // ... Add other products
// ];

function ProductList() {
  const { t } = useTranslation();
  return (
    <div className="product-list">
      <h2>{t("telephone")}</h2>
      <div className="brand-filters">
        {[
          "Apple",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "vivo",
          "realme",
          "ASUS",
          "TECNO",
          "Nokia",
          "Infinix",
          "Oneplus",
          "Xem tất cả",
        ].map((brand) => (
          <button key={brand} className="brand-button">
            {brand}
          </button>
        ))}
      </div>

      <ProductLayout></ProductLayout>
    </div>
  );
}

export default ProductList;
