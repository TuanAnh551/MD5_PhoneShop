import React, { useState } from "react";
import "../category/category.scss";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  createdAt: string;
  status?: "active" | "inactive";
}

const ProductAdmin: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([
    { id: 1, name: "thienpxc1000003", image: "path/to/star-image.jpg" , price: 1000, createdAt: "2021-09-01" },
    // Thêm các danh mục khác vào đây
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(product.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="category-list">
      <h1>CATEGORY</h1>
      <h2>Tất cả các Danh mục</h2>

      <button className="add-category-btn">Add Category</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>CreatedAt</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>

              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  width="50"
                  height="50"
                />
              </td>
                <td>{product.price}</td>
                <td>{product.createdAt}</td>
              <td>{product.status}</td>
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
