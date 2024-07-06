import React, { useEffect, useState } from "react";
import "../category/category.scss";
import "./product.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import apis from "@/apis";
import { Modal } from "antd";
import EditProduct from "./EditProduct";

const ProductAdmin: React.FC = () => {
  const [view, setView] = useState(false);
  const [productInfo, setProductInfo] = useState(null);
  const [products, setProducts] = useState([]);
   const [editingId, setEditingId] = useState<string | null>(null);

  const handleView = (id: string) => {
    setView(!view);
    if (id) {
      apis.product
        .getProductById(id)
        .then((res) => {
          setProductInfo(res.data);
          setView(true);
        })
        .catch((error) => {
          console.error("Failed to fetch product:", error);
        });
    }
  };
  const handleEdit = (id) => {
  setEditingId(id);
  };
  useEffect(() => {
    apis.product
      .getProduct()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);
  
  //translation
  const { t } = useTranslation();
  return (
    <div className="category-list">
      <h1>{t("product")}</h1>
      <h2>{t("allProduct")}</h2>

      <button className="add-category-btn">
        <Link className="link-add-category" to="add">
          {t("addProduct")}
        </Link>
      </button>

      <table>
        <thead>
          <tr>
            <th>{t("idProduct")}</th>
            <th>{t("nameProduct")}</th>
            {/* <th>{t("imageProduct")}</th> */}
            <th>{t("categoryProduct")}</th>
            {/* <th>{t("priceProduct")}</th> */}
            <th>Storage</th>
            <th>{t("imageProduct")}</th>
            <th>{t("createDateProduct")}</th>
            {/* <th>{t("updateDateProduct")}</th> */}
            <th>{t("statusProduct")}</th>
            <th>{t("actionProduct")}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index++}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.category.name}</td>
              <td>{product.storage}</td>
              {/* <td>{formatVNCurrency(product.price)}</td> */}
              {product.productVariantImg.length > 0 && (
                <img
                  src={product.productVariantImg[0].images}
                  alt="Product Variant"
                  style={{ width: "100px", height: "100px" }}
                />
              )}
              <td>{product.createDate.split("T")[0]}</td>
              <td>{product.status ? t("active") : t("inactive")}</td>
              <td>
                <button
                  className="view-btn"
                  onClick={() => handleView(product.id)}
                >
                  {t("view")}
                </button>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(product.id)}
                >
                  {t("edit")}
                </button>

                <button className="delete-btn">{t("delete")}</button>
              </td>
            </tr>
          ))}
          <Modal
            title="Thông tin sản phẩm"
            visible={view}
            onOk={() => setView(false)}
            onCancel={() => setView(false)}
          >
            {productInfo ? (
              <div>
                <h2>Thông tin sản phẩm</h2>
                <p>Tên sản phẩm: {productInfo.name}</p>
                <p>Giá: {productInfo.productVariants[0].price}</p>{" "}
                {/* Assuming you want to show the price from the first variant */}
                <p>Mô tả: {productInfo.description}</p>
                <p>Danh mục: {productInfo.category.name}</p>
                <p>Mô tả danh mục: {productInfo.category.description}</p>
                <div>
                  <h3>Biến thể sản phẩm</h3>
                  {productInfo.productVariants.map((variant) => (
                    <div key={variant.id}>
                      <p>Màu sắc: {variant.color}</p>
                      <p>Giá: {variant.price}</p>
                      <p>Mô tả: {variant.description}</p>
                      <img
                        src={variant.image}
                        alt={`Hình ảnh của ${variant.color}`}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <h3>Hình ảnh sản phẩm</h3>
                  {productInfo.productVariantImg.map((img) => (
                    <img
                      key={img.id}
                      src={img.images}
                      alt="Hình ảnh sản phẩm"
                      style={{
                        width: "100px",
                        height: "100px",
                        marginRight: "10px",
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <p>Đang tải thông tin sản phẩm...</p>
            )}
          </Modal>
        </tbody>
      </table>
      {editingId && <EditProduct productId={editingId} />}
    </div>
  );
};

export default ProductAdmin;
