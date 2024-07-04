import React, { useEffect, useState } from "react";
import "../category/category.scss";
import { use } from "i18next";
import axios from "axios";

const ProductAdmin: React.FC = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1234/api/user").then((res) => {
      setUser(res.data);
      console.log("user", res.data);
    });
  }, []);
  return (
    <div className="category-list">
      <h1>USER</h1>
      <h2>Tất cả tài khoản</h2>

      <button className="add-category-btn">Add Category</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.status}</td>
              <td>{user.userRole}</td>
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
