import apis from '@/apis';
import React, { useEffect, useState } from 'react'
import ProductVariantModal from './ProductVariantModal';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const  navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [categories, setCategories] = useState("");

    useEffect(() => {
      apis.category
        .categoryPro()
        .then((res) => {
          setCategories(res.data); 
          console.log(res.data);
        })
        .catch((error) => {
          console.error("Failed to fetch categories:", error);
        });
    }, []);
        const safeCategories = Array.isArray(categories) ? categories : [];
  return (
    <>
      <div className="modal-product">
        <form>
          <h2>Add Product</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <button type="button" onClick={() => setShowModal(true)}>
            +
          </button>
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
            {safeCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >Close</button>
          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </form>
        <ProductVariantModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
    </>
  );
}
