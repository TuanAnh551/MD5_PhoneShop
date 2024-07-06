import apis from "@/apis";
import React, { useEffect, useState } from "react";
import { Input, Modal } from "antd";
import "./product.scss";

export default function EditProduct({ productId }) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  // Khởi tạo state cho thông tin sản phẩm
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    storage: "",
    category: { id: "", name: "" },
    createDate: "",
    status: true,
    productVariants: [],
    productVariantImg: [],
  });

 
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await apis.product.getProductById(productId);
        const productData = response.data;
        console.log("Product data:", productData);

        setProduct({
          id: productData.id,
          name: productData.name,
          description: productData.description,
          storage: productData.storage,
          category: {
            id: productData.category.id,
            name: productData.category.name,
          },
          createDate: productData.createDate,
          status: productData.status,
          productVariants: productData.productVariants.map((variant) => ({
            id: variant.id,
            color: variant.color,
            price: variant.price,
            image: variant.image,
            quantity: variant.quantity,
            description: variant.description,
            status: variant.status,
          })),
          productVariantImg: productData.productVariantImg.map((img) => ({
            id: img.id,
            images: img.images,
          })),
        });
        setIsModalVisible(true);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    if (productId) {
      fetchProductData();
    }
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apis.product
      .updateProduct({
        product: {
          id: product.id,
          name: product.name,
          description: product.description,
          storage: product.storage,
          categoryId: product.category.id,
        },
        variants: product.productVariants,
        images: product.productVariantImg,
      })
      .then((res) => {
        console.log(res);
          console.log(
            "Sending formData:",
            product.productVariants,
            product.productVariantImg
          );
        // Xử lý sau khi cập nhật thành công
      })
      .catch((error) => {
        console.error("Failed to update product:", error);
        // Xử lý lỗi
      });
  };

  return (
    <>
      <Modal
        title="Chỉnh sửa sản phẩm"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <input
          type="text"
          value={product.id}
          disabled
          style={{ display: "none" }}
        />
        <Input
          name="name"
          value={product.name}
          onChange={handleInputChange}
          placeholder="Tên sản phẩm"
          style={{ marginBottom: "10px" }}
        />
        <Input.TextArea
          name="description"
          value={product.description}
          onChange={handleInputChange}
          placeholder="Mô tả"
          style={{ marginBottom: "10px" }}
        />
        <Input
          name="storage"
          value={product.storage}
          onChange={handleInputChange}
          placeholder="Bộ nhớ"
          style={{ marginBottom: "10px" }}
        />
        <Input
          name="category"
          value={product.category.name}
          onChange={(e) =>
            setProduct((prev) => ({
              ...prev,
              category: { ...prev.category, name: e.target.value },
            }))
          }
          disabled
          placeholder="Danh mục"
          style={{ marginBottom: "10px" }}
        />
        <Input
          name="createDate"
          value={product.createDate}
          onChange={handleInputChange}
          placeholder="Ngày tạo"
          style={{ marginBottom: "10px" }}
          disabled
        />
        {/* Thêm các trường khác nếu cần */}
        {product.productVariants.map((variant, index) => (
          <div key={variant.id}>
            <h4>Biến thể sản phẩm</h4>
            <input
              type="text"
              value={variant.id}
              disabled
              style={{ display: "none" }}
            />
            <Input
              value={variant.color}
              onChange={(e) => {
                const newVariants = [...product.productVariants];
                newVariants[index].color = e.target.value;
                setProduct((prev) => ({
                  ...prev,
                  productVariants: newVariants,
                }));
              }}
              placeholder="Màu sắc"
              style={{ marginBottom: "5px" }}
            />
            <img
              src={variant.image}
              alt={`Hình ảnh ${index + 1}`}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  // Tạo URL từ file được chọn
                  const newImageUrl = URL.createObjectURL(e.target.files[0]);

                  // Cập nhật mảng hình ảnh trong trạng thái sản phẩm
                  const newImages = [...product.productVariants];
                  newImages[index].image = newImageUrl;
                  setProduct((prev) => ({
                    ...prev,
                    productVariantImg: newImages,
                  }));
                }
              }}
              style={{ marginTop: "5px" }}
            />
            <h5>Giá</h5>
            <Input
              value={variant.price}
              onChange={(e) => {
                const newVariants = [...product.productVariants];
                newVariants[index].price = e.target.value;
                setProduct((prev) => ({
                  ...prev,
                  productVariants: newVariants,
                }));
              }}
              placeholder="Giá"
              style={{ marginBottom: "5px" }}
            />
            <h5>Số lượng</h5>
            <Input
              value={variant.quantity}
              onChange={(e) => {
                const newVariants = [...product.productVariants];
                newVariants[index].quantity = e.target.value;
                setProduct((prev) => ({
                  ...prev,
                  productVariants: newVariants,
                }));
              }}
              placeholder="Số lượng"
              style={{ marginBottom: "5px" }}
            />
            <h5>Mô tả</h5>
            <Input.TextArea
              value={variant.description}
              onChange={(e) => {
                const newVariants = [...product.productVariants];
                newVariants[index].description = e.target.value;
                setProduct((prev) => ({
                  ...prev,
                  productVariants: newVariants,
                }));
              }}
              placeholder="Mô tả"
              style={{ marginBottom: "5px" }}
            />
          </div>
        ))}
        <h4>Hình ảnh sản phẩm</h4>
        <div className="images-container">
          {product.productVariantImg.map((img, index) => (
            <div key={img.id} className="imgEdit">
              <input
                type="text"
                value={img.id}
                disabled
                style={{ display: "none" }}
              />
              <img src={img.images} alt={`Hình ảnh ${index + 1}`} />
            </div>
          ))}
        </div>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              // Tạo URL từ file được chọn
              const newImageUrl = URL.createObjectURL(e.target.files[0]);

              // Cập nhật mảng hình ảnh trong trạng thái sản phẩm
              const newImages = [...product.productVariantImg];
              newImages[index].images = newImageUrl;
              setProduct((prev) => ({
                ...prev,
                productVariantImg: newImages,
              }));
            }
          }}
          style={{ marginTop: "5px" }}
        />
      </Modal>
    </>
  );
}
