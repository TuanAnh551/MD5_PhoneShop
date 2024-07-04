import React, { useState } from 'react'
import "./product.scss";
import ProductColor from './ProductColor';


export default function ProductVariantModal({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    const [formData, setFormData] = useState({
      storage: "",
      quantity: "",
      description: "",
    });
     

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevState) => ({ ...prevState, [name]: value }));
   };
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(formData);
    };

  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label htmlFor="storage">Storage:</label>
        <input
          type="text"
          id="storage"
          name="storage"
          value={formData.storage}
          onChange={handleChange}
        />

        <button type="button" onClick={() => setIsModalOpen(true)}>
          +
        </button>

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="button" onClick={onClose}>
          Close
        </button>
        <button type="submit">Save</button>
      </form>
      <ProductColor
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}