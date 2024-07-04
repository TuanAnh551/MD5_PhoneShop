import React, { useEffect, useState } from "react";
import "../category/category.scss";
import { use } from "i18next";
import axios from "axios";
import { User } from "@/stores/slices/user.slices";
import { useTranslation } from "react-i18next";

const ProductAdmin: React.FC = () => {
  const { t } = useTranslation();
  //show user
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {
    axios.get("http://localhost:1234/api/user").then((res) => {
      setUser(res.data);
      console.log("user", res.data);
    });
  }, []);

  //block user
  const blockUser = (id: number) => {
    window.confirm("Bạn có chắc chắn muốn block tài khoản này không?");
    axios.post(`http://localhost:1234/api/user/block/${id}`).then((res) => {
      console.log("block user", res.data);
      window.location.reload();
    });
  };
  return (
    <div className="category-list">
      <h1> {t("user")}</h1>
      <h2> {t("allUser")}</h2>

      <table>
        <thead>
          <tr>
            <th> {t("idUser")}</th>
            <th> {t("nameUser")}</th>
            <th> {t("emailUser")}</th>
            <th> {t("phoneUser")}</th>
            <th> {t("addressUser")}</th>
            <th> {t("roleUser")}</th>
            <th> {t("statusUser")}</th>
            <th> {t("actionUser")}</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.userRole ? "ADMIN" : "MEMBER"}</td>
              <td>{user.status ? "Active" : "Block"}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => {
                    blockUser(user.id);
                  }}
                >
                  {user.status ? "Block" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductAdmin;
