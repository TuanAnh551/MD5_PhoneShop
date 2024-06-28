import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

import "./ProductDetail.scss";

const ProductDetail = () => {
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [showMoreSpecs, setShowMoreSpecs] = useState(false);

  const features = [
    {
      text: "Thiết kế với nhiều đột phá.Về kích thước, iPhone 13 sẽ có 4 phiên bản khác nhau và kích thước không đổi so với series iPhone 12 hiện tại. Nếu iPhone 12 có sự thay đổi trong thiết kế từ góc cạnh bo tròn (Thiết kế được duy trì từ thời iPhone 6 đến iPhone 11 Pro Max) sang thiết kế vuông vắn (đã từng có mặt trên iPhone 4 đến iPhone 5S, SE).Thì trên điện thoại iPhone 13 vẫn được duy trì một thiết kế tương tự. Máy vẫn có phiên bản khung viền thép, một số phiên bản khung nhôm cùng mặt lưng kính. Tương tự năm ngoái, Apple cũng sẽ cho ra mắt 4 phiên bản là iPhone 13, 13 mini, 13 Pro và 13 Pro Max.",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/mobile/apple/IPHONE-13-1.jpg",
    },
    {
      text: 'Không gian hiển thị sống động - Màn hình 6.1" Super Retina XDR độ sáng cao, sắc nét',
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/mobile/apple/iphone-13-13.png",
    },
    {
      text: "Trải nghiệm điện ảnh đỉnh cao - Camera kép 12MP, hỗ trợ ổn định hình ảnh quang học",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/mobile/apple/IPHONE-13-2.jpg",
    },
    {
      text: "Tối ưu điện năng - Sạc nhanh 20 W, đầy 50% pin trong khoảng 30 phút",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/mobile/apple/IPHONE-13-4.jpg",
    },
    {
      text: "Thiết kế tinh tế - Vỏ nhôm nguyên khối, mặt kính Ceramic Shield chống trầy xước",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/mobile/apple/IPHONE-13-5.jpg",
    },
    {
      text: "Hệ điều hành iOS 15 - Công nghệ mới, nhiều tính năng thông minh",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/mobile/apple/IPHONE-13-6.jpg",
    },
  ];

  const specs = [
    { label: "Kích thước màn hình", value: "6.1 inches" },
    { label: "Công nghệ màn hình", value: "Super Retina XDR OLED" },
    {
      label: "Camera sau",
      value: "Camera góc rộng: 12MP, f/1.6\nCamera góc siêu rộng: 12MP, f/2.4",
    },
    { label: "Camera trước", value: "12MP, f/2.2" },
    { label: "Chipset", value: "Apple A15" },
    { label: "Dung lượng RAM", value: "4 GB" },
    { label: "Bộ nhớ trong", value: "128 GB" },
    { label: "Pin", value: "3240mAh" },
    { label: "Thẻ SIM", value: "2 SIM (nano‑SIM và eSIM)" },
  ];
  return (
    <>
      <div className="product-page">
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            color: "#ff3b30",
          }}
        >
          <HomeIcon />
          Về trang chủ
        </Link>
        <h1>
          iPhone 13 128GB | Chính hãng VN/A
          <span className="rating">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} sx={{ color: "#ffd700" }} />
            ))}
            184 đánh giá
          </span>
        </h1>

        <div className="line"></div>

        <div className="product-content">
          <div className="product-image">
            <FavoriteIcon className="heart-icon" sx={{ color: "#ff3b30" }} />

            <img
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone_13_128gb_-_1_1_.png"
              alt="iPhone 13"
            />
          </div>

          <div className="product-info">
            <div className="storage-options">
              {["512GB", "256GB", "128GB"].map((storage, index) => (
                <button
                  key={index}
                  className={storage === "128GB" ? "active" : ""}
                >
                  {storage}
                  <div>
                    {storage === "128GB"
                      ? "13.690.000 đ"
                      : storage === "256GB"
                      ? "17.490.000 đ"
                      : "24.390.000 đ"}
                  </div>
                </button>
              ))}
            </div>
            <p>Chọn màu để xem giá và chi nhánh có hàng</p>
            <div className="color-options">
              {["Xanh lá", "Hồng", "Đen", "Trắng", "Xanh dương", "Đỏ"].map(
                (color, index) => (
                  <button
                    key={index}
                    className={color === "Trắng" ? "active" : ""}
                  >
                    <div
                      className={`color-circle ${color.toLowerCase()}`}
                    ></div>
                    {color}
                    <div>13.690.000đ</div>
                  </button>
                )
              )}
            </div>
            <div className="price-section">
              <div className="current-price">13.690.000đ</div>
              <div className="old-price">18.990.000đ</div>
            </div>
            <div className="installment-options">
              <button className="momo">
                <BoltIcon /> Trả Góp 0% Sản Phẩm Apple
              </button>
              <button className="credit-card">
                Trả trước chỉ 50% | Kỳ Hạn 6 Tháng
              </button>
            </div>

            <div className="button-grid">
              <button className="buy-now">
                MUA NGAY <p>(Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)</p>
              </button>

              <div className="installment">
                <h3> TRẢ GÓP 0% </h3> <span>Trả trước chỉ từ 5.697.000đ</span>
              </div>
              <div className="visa-card">
                <h3> TRẢ GÓP 0% QUA THẺ </h3>
                <span>(Không phí chuyển đổi 3 - 6 tháng)</span>
              </div>
              <button className="add-to-cart">
                <ShoppingCartIcon /> Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* detail --------------------------------------------------------------------------*/}
      <div className="product-details">
        <div className="features">
          <h2>ĐẶC ĐIỂM NỔI BẬT</h2>
          <ul>
            {features
              .slice(0, showMoreFeatures ? features.length : 1)
              .map((feature, index) => (
                <li key={index}>
                  <img src={feature.image}></img>
                  <p>{feature.text}</p>
                </li>
              ))}
          </ul>
          <Button
            style={{
              border: "1px solid #ff3b30",
              color: "#ff3b30",
            }}
            variant="outlined"
            onClick={() => setShowMoreFeatures(!showMoreFeatures)}
            endIcon={
              showMoreFeatures ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )
            }
          >
            {showMoreFeatures ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>

        <div className="specs">
          <h2>THÔNG SỐ KỸ THUẬT</h2>
          <table>
            <tbody>
              {specs
                .slice(0, showMoreSpecs ? specs.length : 4)
                .map((spec, index) => (
                  <tr key={index}>
                    <td>{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Button
            style={{
              border: "1px solid #ff3b30",
              color: "#ff3b30",
            }}
            variant="outlined"
            onClick={() => setShowMoreSpecs(!showMoreSpecs)}
            endIcon={
              showMoreSpecs ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )
            }
          >
            {showMoreSpecs ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
