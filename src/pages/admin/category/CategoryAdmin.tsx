import React, { useEffect, useState } from "react";
import "./category.scss";

import { useSelector } from "react-redux";
import { StoreType } from "@/stores/slices";
import axios from "axios";
import apis from "@/apis";
import { Category } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Pagination } from "@mui/material";
import { debounce } from "lodash"; // Assuming lodash is installed

const CategoryAdmin: React.FC = () => {
  const categoryStore = useSelector((store: StoreType) => {
    return store.categoryStore;
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const limit = 3;

  useEffect(() => {
    const offset = (currentPage - 1) * limit;
    apis.category.paginationCategory(offset, limit).then((response) => {
      console.log("Category data:", response.data);
      const newData = categoryStore.data?.slice(offset, offset + limit) ?? [];
      setCurrentPageData(newData);
    });
  }, [currentPage, categoryStore.data]);

  const totalPage = Math.ceil((categoryStore.data?.length ?? 0) / limit);
  const handlePageChange = (event: any, page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  // Add category
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
    };
    //gọi axios
    apis.category
      .add(data)
      .then((response) => {
        console.log("Category added:", response.data);
        handleCloseModal(); // Close the modal on success
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  // Delete category
  function handleDelete(id: number) {
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (isConfirmed) {
      apis.category
        .delete(id)
        .then((response) => {
          console.log("Category deleted:", response.data);
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
        });
    }
  }

  // ----------Edit category-------------------------------

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryEdit, setCategoryEdit] = useState({
    id: "",
    name: "",
    description: "",
  });
  const closeModalEdit = () => {
    setIsModalVisible(false);
  };

  const openModalEdit = (id: number) => {
    setIsModalVisible(true);
    // Gọi API với categoryId
    apis.category
      .getDataCat(id)
      .then((response) => {
        setCategoryEdit(response.data);
        console.log("Category :", response.data);
      })
      .catch((error) => {
        console.error("Error getting category:", error);
      });
  };

  const handleEdit = (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target);
    const data = {
      id: formData.get("id"),
      name: formData.get("name"),
      description: formData.get("description"),
    };
    // Gọi API edit
    apis.category
      .edit(data)
      .then((response) => {
        console.log("Category edited:", response.data);
        closeModalEdit(); // Close the modal on success
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error editing category:", error.response.data);
          console.error("Status code:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          console.error(
            "Error editing category: No response received",
            error.request
          );
        } else {
          console.error("Error editing category:", error.message);
        }
      });
  };

  //translate
  const { t } = useTranslation();

  //search category (su dung debounce cua lodash)
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
      apis.category
        .searchCategory(value)
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
  return (
    <div className="category-list">
      <div className="search-bar">
        <h1>{t("category")}</h1>
        <input
          type="text"
          placeholder="Search for category"
          onChange={handleSearch}
        />
      </div>

      <h2>{t("allCategory")}</h2>

      <button className="add-category-btn" onClick={handleOpenModal}>
        {t("addCategory")}
      </button>
      {showModal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <h2>{t("addCategory")}</h2>
            <label htmlFor="name">{t("nameCategory")}</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="description">{t("descriptionCategory")}</label>
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
            ></textarea>
            <button type="button" onClick={handleCloseModal}>
              {t("close")}
            </button>
            <button type="submit" className="btn btn-primary">
              {t("add")}
            </button>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>{t("idCategory")}</th>
            <th>{t("nameCategory")}</th>
            <th>{t("descriptionCategory")}</th>
            <th>{t("statusCategory")}</th>
            <th>{t("actionCategory")}</th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((category: any, index: number) => (
            <tr key={category.id}>
              <td>{(currentPage - 1) * limit + index + 1}</td>{" "}
              {/* Correct indexing for pagination */}
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>{category.status ? "Đang bán" : "Hết hàng"}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => {
                    openModalEdit(category.id);
                    console.log("category.id", category.id);
                  }}
                >
                  {t("edit")}
                </button>
                {isModalVisible && (
                  <div className="modal">
                    <form onSubmit={handleEdit}>
                      <h2>{t("editCategory")}</h2>
                      <label htmlFor="id">{t("idCategory")}</label>
                      <input
                        type="text"
                        name="id"
                        value={categoryEdit.id}
                        readOnly
                      />
                      <label htmlFor="name">{t("nameCategory")}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={categoryEdit.name}
                        required
                      />
                      <label htmlFor="description">
                        {t("descriptionCategory")}
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        cols={30}
                        rows={10}
                        defaultValue={categoryEdit.description}
                      ></textarea>

                      <button type="button" onClick={closeModalEdit}>
                        {t("close")}
                      </button>
                      <button type="submit" className="btn btn-primary">
                        {t("save")}
                      </button>
                    </form>
                  </div>
                )}
                {/* <button
                  className="delete-btn"
                  onClick={() => handleDelete(category.id)}
                >
                  Delete
                </button> */}
                <button
                  className="delete-btn"
                  onClick={() => {
                    handleDelete(category.id);
                  }}
                >
                  {t("delete")}
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

export default CategoryAdmin;
