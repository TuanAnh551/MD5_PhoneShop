/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./product.scss";

import { fireBaseFn } from "@/firebase";
import { useDispatch } from "react-redux";
import { productActions } from "@/stores/slices/product.slices";

export default function ProductVariantModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  if (!isOpen) return null;
  
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     

   
    const formData = {
      color: (e.target as any).color.value,
      price: (e.target as any).price.value,
      image: await fireBaseFn.uploadToStorage((e.target as any).image.files[0]),
      quantity: (e.target as any).quantity.value,
      description: (e.target as any).description.value,
    };
    console.log(formData);
   
    dispatch(productActions.addProduct(formData));
   onClose();
    console.log(formData);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color:</label>
        <input type="text" name="color" id="color" />
        <label htmlFor="price">Price:</label>
        <input type="number" name="price" id="price" />
        <label>Image:</label>
        <input type="file" name="image" id="image" />

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" />
        <button type="button" onClick={onClose}>
          Close
        </button>

        <button
          type="submit" 
        >
          Save
        </button>
      </form>
    </div>
  );
}
