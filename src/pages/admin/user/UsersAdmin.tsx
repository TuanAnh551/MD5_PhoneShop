import React, { useEffect, useState } from "react";
import "../category/category.scss";
import { use } from "i18next";
import axios from "axios";
import { User } from "@/stores/slices/user.slices";
import { useTranslation } from "react-i18next";
import apis from "@/apis";
import { Pagination } from "@mui/material";
import { debounce } from "lodash";

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

  //pagination user

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState<User[]>([]);
  const limit = 1;
  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    apis.user.paginationUser(offset, limit).then((res) => {
      console.log("pagination user", res.data);
      setCurrentPageData(res.data);
    });
  }, [currentPage, user]);
  const totalPage = Math.ceil(user.length / limit);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  //search user
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // Kiểm tra xem có kết quả tìm kiếm không, nếu có thì hiển thị kết quả tìm kiếm, nếu không thì hiển thị dữ liệu trang hiện tại
  const dataToShow = searchResult.length > 0 ? searchResult : currentPageData;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    debouncedSearch(event.target.value);
  };

  const debouncedSearch = debounce((value: string) => {
    if (value === "") {
      setSearchResult([]);
    } else {
      apis.user
        .searchUser(value)
        .then((response) => {
          console.log("Search result:", response.data);
          setSearchResult(response.data);
        })
        .catch((error) => {
          console.error("Error searching category:", error);
        });
    }
  }, 300);
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

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
      <div className="search-bar">
        <h1> {t("user")}</h1>
        <input
          type="text"
          placeholder="Search for user"
          onChange={handleSearch}
        />
      </div>

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
          {dataToShow.map((user, index) => (
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

      <Pagination
        count={totalPage} // Use the calculated total pages
        page={currentPage} // Current page
        onChange={handlePageChange} // Handle page change
        shape="rounded"
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default ProductAdmin;
