import React, {  useState } from "react";
import "../category/category.scss";

import axios from "axios";
import { formatVNCurrency } from "../../../util/currency";
import "./product.scss";
import { Link, Outlet } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string[]; 
  description: string; 
  Category: { id: number; name: string; description: string; status: boolean }; 
  price: number;
  createDate: string;
  updateDate: string;
  status: boolean; 
}

const ProductAdmin: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };



 
  const [modelAddProduct, setModelAddProduct] = useState(false);
 

 
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

      <button className="add-category-btn">
        <Link className="link-add-category" to="add">
          Add Product
        </Link>
      </button>

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
    </div>
  );
};

export default ProductAdmin;
