import React, { useState } from "react";
import "./category.scss";
import { Category } from "@/stores/slices/category.slice";
import { useSelector } from "react-redux";
import { StoreType } from "@/stores/slices";

const CategoryAdmin: React.FC = () => {
  const categoryStore = useSelector((store: StoreType) => {
    return store.categoryStore;
  });

  // const [showModal, setShowModal] = useState(false);

  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  // Delete category
  // function handleDelete(id: number) {
  //   axios
  //     .post(`/api/admin/category/delete/${id}`)
  //     .then(() => {
  //       // Update the categories state after successful deletion
  //       setCategories((prevCategories) =>
  //         prevCategories.filter((category) => category.id !== id)
  //       );
  //     })
  //     .catch((error) => {
  //       console.error("There was an error deleting the category:", error);
  //     });
  // }

  // Add category

  // const handleSubmit = (event: any) => {
  //   event.preventDefault(); // Prevent the default form submission behavior

  //   // Gather form data
  //   const formData = new FormData(event.target);
  //   const data = {
  //     name: formData.get("name"), // Assuming 'name' is the name attribute of your input
  //     description: formData.get("description"), // Assuming 'description' is the name attribute of your textarea
  //   };

  //   axios
  //     .post("/api/admin/category/add", data)
  //     .then((response) => {
  //       console.log("Category added:", response.data);
  //       handleCloseModal(); // Close the modal on success
  //       // Optionally, refresh the list of categories or navigate as needed
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       console.error("Error adding category:", error);
  //       // Handle error (e.g., show an error message)
  //     });
  // };

  // ----------------------------------------------Edit category----------------------------------------------

  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const convertStatusToBoolean = (status: unknown) => {
  //   return status === "active"; // Trả về true nếu status là 'active', ngược lại trả về false
  // };

  // const closeModalEdit = () => {
  //   setIsModalVisible(false);
  // };

  // const handleEdit = (event: any) => {
  //   event.preventDefault(); // Prevent the default form submission behavior

  //   // Gather form data
  //   const formData = new FormData(event.target);
  //   const data = {
  //     id: formData.get("id"),
  //     name: formData.get("name"),
  //     description: formData.get("description"),
  //     status: convertStatusToBoolean(formData.get("status")),
  //   };

  //   axios
  //     .post(`/api/admin/category/update`, data)
  //     .then((response) => {
  //       console.log("Category edited:", response.data);
  //       closeModalEdit(); // Close the modal on success
  //       // Optionally, refresh the list of categories or navigate as needed
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         // The request was made and the server responded with a status code
  //         // that falls out of the range of 2xx
  //         console.error("Error editing category:", error.response.data);
  //         console.error("Status code:", error.response.status);
  //         console.error("Headers:", error.response.headers);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         console.error(
  //           "Error editing category: No response received",
  //           error.request
  //         );
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.error("Error editing category:", error.message);
  //       }
  //     });
  // };

  return (
    <div className="category-list">
      <h1>CATEGORY</h1>
      <h2>Tất cả các Danh mục</h2>

      <button className="add-category-btn">Add Category</button>
      {/* {showModal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
            ></textarea>
            <button type="button" onClick={handleCloseModal}>
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </form>
        </div>
      )} */}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryStore.data?.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>{category.status ? "Active" : "Inactive"}</td>
              <td>
                <button className="edit-btn">
                  {" "}
                  {/* Example category ID */}
                  Edit
                </button>
                {/* {isModalVisible && (
                  <div className="modal">
                    <form onSubmit={handleEdit}>
                      <h2>Edit Category</h2>
                      <label htmlFor="id">Id:</label>
                      <input
                        type="text"
                        name="id"
                        value={category.id}
                        readOnly
                      />
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={category.name}
                        required
                      />
                      <label htmlFor="description">Description:</label>
                      <textarea
                        name="description"
                        id="description"
                        cols={30}
                        rows={10}
                        defaultValue={category.description}
                      ></textarea>
                      <label htmlFor="status">Status:</label>
                      <select
                        name="status"
                        id="status"
                        defaultValue={category.status}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                      <button type="button" onClick={closeModalEdit}>
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </form>
                  </div>
                )} */}
                {/* <button
                  className="delete-btn"
                  onClick={() => handleDelete(category.id)}
                >
                  Delete
                </button> */}
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryAdmin;
