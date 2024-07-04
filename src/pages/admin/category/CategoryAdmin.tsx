import React, { useState } from "react";
import "./category.scss";

import { useSelector } from "react-redux";
import { StoreType } from "@/stores/slices";
import axios from "axios";
import apis from "@/apis";
import { Category } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const CategoryAdmin: React.FC = () => {
  const categoryStore = useSelector((store: StoreType) => {
    return store.categoryStore;
  });

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

    // Gather form data
    const formData = new FormData(event.target);
    const data = {
      id: formData.get("id"),
      name: formData.get("name"),
      description: formData.get("description"),
    };

    apis.category
      .edit(data)
      .then((response) => {
        console.log("Category edited:", response.data);
        closeModalEdit(); // Close the modal on success
        // Optionally, refresh the list of categories or navigate as needed
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error editing category:", error.response.data);
          console.error("Status code:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error(
            "Error editing category: No response received",
            error.request
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error editing category:", error.message);
        }
      });
  };

  //translate
  const { t } = useTranslation();

  return (
    <div className="category-list">
      <h1>{t("category")}</h1>
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
          {categoryStore.data?.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
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
    </div>
  );
};

export default CategoryAdmin;
