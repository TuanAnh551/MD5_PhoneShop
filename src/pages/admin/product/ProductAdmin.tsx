import React, { useEffect, useState } from "react";
import "../category/category.scss";
import Category from "@/pages/admin/category/CategoryAdmin";
import axios from "axios";
import { formatVNCurrency } from "../../../util/currency";
import "./product.scss";

interface Product {
  id: number;
  name: string;
  image: string[]; // Dựa vào dữ liệu, images là một mảng
  description: string; // Sửa lỗi chính tả
  Category: { id: number; name: string; description: string; status: boolean }; // Cập nhật cấu trúc
  price: number;
  createDate: string;
  updateDate: string;
  status: boolean; // Dựa vào dữ liệu, status không còn là optional và là boolean
}

const ProductAdmin: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(product.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  //show product----------------
  useEffect(() => {
    axios
      .get("/api/admin/product")
      .then((response) => {
        const formattedProducts = response.data.map((product: any) => ({
          ...product,
          image: product.images[0] || "", // Lấy hình ảnh đầu tiên hoặc chuỗi rỗng nếu không có hình ảnh
          Category: product.category, // Đảm bảo tên trường phù hợp, ví dụ: từ 'Category' sang 'category' nếu cần
        }));
        setProduct(formattedProducts);
        console.log("productShow", formattedProducts);
      })
      .catch((error) => {
        console.error("There was an error fetching the product:", error);
      });
  }, []);

  //add product----------------
  const [modelAddProduct, setModelAddProduct] = useState(false);
  const [categories, setCategories] = useState<
    { id: number; name: string; description: string; status: boolean }[]
  >([]);

  const handleOpenModal = () => {
    setModelAddProduct(true);
    axios.get("/api/admin/category").then((response) => {
      setCategories(response.data); // Assuming `response.data` is an array of categories
    });
  };
  const handleCloseModal = () => {
    setModelAddProduct(false);
  };

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      image: formData.get("image"),
      description: formData.get("description"),
      category: formData.get("category"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
      createDate: formData.get("createDate"),
      updateDate: formData.get("updateDate"),
    };
    axios
      .post("/api/admin/product/add", data)
      .then((response) => {
        console.log("Product added successfully", response.data);

        handleCloseModal();
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error adding product", error.response.data);
          console.error("Error adding product", error.response.status);
          console.error("Error adding product", error.response.headers);
        } else if (error.request) {
          console.error("Error adding product", error.request);
        } else {
          console.error("Error", error.message);
        }
      });
  };

  return (
    <div className="category-list">
      <h1>Product</h1>
      <h2>Tất cả các sản phẩm</h2>

      <button className="add-category-btn" onClick={handleOpenModal}>
        Add Product
      </button>
      {modelAddProduct && (
        <div className="modal-product">
          <form onSubmit={handleAddProduct}>
            <h2>Add Product</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
            ></textarea>
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" required>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" required />
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" required />
            <label htmlFor="createDate">Create Date:</label>
            <input type="date" id="createDate" name="createDate" required />
            <label htmlFor="updateDate">Update Date:</label>
            <input type="date" id="updateDate" name="updateDate" required />
            <button type="button" onClick={handleCloseModal}>
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Update At</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((products) => (
            <tr key={products.id}>
              <td>{products.id}</td>
              <td>{products.name}</td>

              <td>
                <img
                  src={products.image[0]}
                  alt={products.name}
                  width="50"
                  height="50"
                />
              </td>
              <td>{products.description}</td>
              <td>{products.Category.name}</td>
              <td>{formatVNCurrency(products.price)}</td>
              <td>{products.createDate.split("T")[0]}</td>
              <td>{products.updateDate.split("T")[0]}</td>
              <td>{products.status ? "Active" : "Inactive"}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductAdmin;
