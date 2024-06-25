import React, { useState } from "react";

interface NavItem {
  name: string;
  subCategories?: {
    [key: string]: string[];
  };
}

const navItems: NavItem[] = [
  {
    name: "Điện thoại, Tablet",
    subCategories: {
      "Thương hiệu": [
        "Mac",
        "ASUS",
        "Lenovo",
        "Dell",
        "HP",
        "Acer",
        "LG",
        "Huawei",
        "MSI",
        "Gigabyte",
        "Vaio",
        "Microsoft Surface",
      ],
      "Phân khúc giá": [
        "Dưới 10 triệu",
        "Từ 10 - 15 triệu",
        "Từ 15 - 20 triệu",
        "Từ 20 - 25 triệu",
        "Từ 25 - 30 triệu",
      ],
      "Nhu cầu sử dụng": [
        "Văn phòng",
        "Gaming",
        "Mỏng nhẹ",
        "Đồ họa - kỹ thuật",
        "Sinh viên",
        "Cảm ứng",
        "Laptop AI",
      ],
      "Dòng chip": [
        "Laptop Core i3",
        "Laptop Core i5",
        "Laptop Core i7",
        "Laptop Core i9",
        "Apple M1 Series",
        "Apple M2 Series",
        "Apple M3 Series",
        "AMD Ryzen",
        "Intel Core Ultra",
      ],
      "Kích thước màn hình": [
        "Laptop 12 inch",
        "Laptop 13 inch",
        "Laptop 14 inch",
        "Laptop 15.6 inch",
        "Laptop 16 inch",
      ],
    },
  },
  // Thêm các mục khác tương tự
];

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${activeItem === index ? "active" : ""}`}
            onMouseEnter={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(null)}
          >
            {item.name}
            {activeItem === index && item.subCategories && (
              <div className="sub-menu">
                {Object.entries(item.subCategories).map(
                  ([category, items], catIndex) => (
                    <div key={catIndex} className="sub-menu-column">
                      <h4>{category}</h4>
                      <ul>
                        {items.map((subItem, itemIndex) => (
                          <li key={itemIndex}>{subItem}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
