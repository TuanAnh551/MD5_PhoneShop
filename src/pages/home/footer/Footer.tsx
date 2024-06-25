import React from "react";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>Tổng đài hỗ trợ miễn phí</h3>
          <p>Gọi mua hàng 1800.2097 (7h30 - 22h00)</p>
          <p>Gọi khiếu nại 1800.2063 (8h00 - 21h30)</p>
          <p>Gọi bảo hành 1800.2064 (8h00 - 21h00)</p>
          <h4>Phương thức thanh toán</h4>
          <div className="payment-methods">
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/wysiwyg/apple-pay-og.png"
              alt="Apple Pay"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png"
              alt="VNPay"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/momo_1.png"
              alt="MoMo"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/onepay-logo.png"
              alt="OnePay"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/mpos-logo.png"
              alt="MPOS"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/kredivo-logo.png"
              alt="Kredivo"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png"
              alt="ZaloPay"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png"
              alt="Payoo"
            />
            <img
              src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/fundiin.png"
              alt="Fundiin"
            />
          </div>
        </div>

        <div className="footer-section subscription">
          <h3>Đăng ký nhận tin khuyến mãi</h3>
          <p>
            <i>*</i> Nhận ngay voucher 10%
          </p>
          <p>
            <i>*</i> Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
          </p>
          <form className="subscription-form">
            <input type="email" placeholder="Email *" required />
            <input type="text" placeholder="Số điện thoại" />
            <div className="agreement">
              <input type="checkbox" required />
              <a href="https://cellphones.com.vn/tos?part=privacy-policy">
                Tôi đồng ý với điều khoản của CellphoneS
              </a>
            </div>
            <button type="submit">Đăng ký ngay</button>
          </form>
        </div>

        <div className="footer-section policies">
          <h3>Thông tin và chính sách</h3>
          <ul>
            <li>Mua hàng và thanh toán Online</li>
            <li>Mua hàng trả góp Online</li>
            <li>Mua hàng trả góp bằng thẻ tín dụng</li>
            <li>Chính sách giao hàng</li>
            <li>Hệ thống cửa hàng</li>
            <li>Xem ưu đãi Smember</li>
            <li>Trả thông tin bảo hành</li>
            <li>Tra cứu hoá đơn điện tử</li>
            <li>Trung tâm bảo hành chính hãng</li>
            <li>Quy định về việc sao lưu dữ liệu</li>
            <li>Chính sách khui hộp sản phẩm Apple</li>
          </ul>
        </div>

        <div className="footer-section services">
          <h3>Dịch vụ và thông tin khác</h3>
          <ul>
            <li>Khách hàng doanh nghiệp (B2B)</li>
            <li>Ưu đãi thanh toán</li>
            <li>Quy chế hoạt động</li>
            <li>Chính sách bảo mật thông tin cá nhân</li>
            <li>Chính sách Bảo hành</li>
            <li>Liên hệ hợp tác kinh doanh</li>
            <li>Tuyển dụng</li>
            <li>Dịch vụ bảo hành mở rộng</li>
            <li>S. Smember. Tích điểm & sử dụng ưu đãi</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Kết nối với CellphoneS</h3>
          <div className="social-icons">
            <a href="#">
              <img
                src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png"
                alt="YouTube"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-tiktok.png"
                alt="TikTok"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-zalo.png"
                alt="Zalo"
              />
            </a>
          </div>
          <h4>Website thành viên</h4>
          <div className="member-websites">
            <div className="website">
              <a href="#">
                <img
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/dienthoaivui.png"
                  alt="Điện Thoại Vui"
                />
              </a>
              <div className="description">
                Hệ thống bảo hành sửa chữa Điện thoại - Máy tính
              </div>
            </div>
            <div className="website">
              <a href="#">
                <img
                  src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Logo_CareS_1.png"
                  alt="CareS"
                />
              </a>
              <div className="description">
                Trung tâm bảo hành uỷ quyền Apple
              </div>
            </div>
            <div className="website">
              <a href="#">
                <img
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/schanel.png"
                  alt="SChannel"
                />
              </a>
              <div className="description">
                Kênh thông tin giải trí công nghệ cho giới trẻ
              </div>
            </div>
            <div className="website">
              <a href="#">
                <img
                  src="https://cdn2.cellphones.com.vn/x30,webp/media/logo/corp-members/sforum.png"
                  alt="SForum"
                />
              </a>
              <div className="description">
                Trang thông tin công nghệ mới nhất
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-links">
          <li>
            <a href="#">Back to School là gì</a>
          </li>
          <li>
            <a href="#">Điện thoại iPhone</a>
          </li>
          <li>
            <a href="#">Điện thoại Vivo</a>
          </li>
          <li>
            <a href="#">Điện thoại OPPO</a>
          </li>
          <li>
            <a href="#">Điện thoại Xiaomi</a>
          </li>
          <li>
            <a href="#">Laptop</a>
          </li>
          <li>
            <a href="#">Tivi</a>
          </li>
          <li>
            <a href="#">Đồ gia dụng</a>
          </li>
        </ul>
        <p>
          Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật ĐIỆU PHÚC - GPKD:
          0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ
          Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          Điện thoại: 028.7108.9666.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
