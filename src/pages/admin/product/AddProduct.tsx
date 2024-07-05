/* eslint-disable @typescript-eslint/no-explicit-any */
import apis from "@/apis";
import React, { useEffect, useState } from "react";
import ProductVariantModal from "./ProductVariantModal";
import { useNavigate } from "react-router-dom";
import { fireBaseFn } from "@/firebase";
import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "@/stores/slices";
import { productActions } from "@/stores/slices/product.slices";

export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
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
 
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = {
      product: {
        name: (e.target as any).name.value,
        storage: (e.target as any).storage.value,
        description: (e.target as any).description.value,
        categoryId: (e.target as any).category.value,
        images: await fireBaseFn.uploadToStorage(
          (e.target as any).image.files[0]
        ),
      },
      variants: productsStore.data,
    };
    console.log(formData);
   apis.product.addProduct(formData).then((res) => {
     console.log(res);
     
     dispatch(productActions.addProduct(res.data));
     console.log(res.data);
   })
  };
  const productsStore = useSelector((store: StoreType) => {
    return store.productsStore;
  });
  const safeCategories = Array.isArray(categories) ? categories : [];
  
  return (
    <>
      <div className="modal-product">
        <form onSubmit={handleSubmit}>
          <h2>Add Product</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="storage">Storage:</label>
          <input type="text" id="storage" name="storage" />
          <button type="button" onClick={() => setShowModal(true)}>
            +
          </button>
          <div className="display">
            {productsStore.data &&
              productsStore.data.map((product) => (
                <div key={Date.now() + Math.random()}>
                  <img src={product.image} className="image-preview"></img>
                  <p>{product.color}</p>
                </div>
              ))}
          </div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="images"
            multiple
           
          />
          {/* <div>
            {imageUrls.map((url, index) => (
              <img
                className="image-preview"
                key={Date.now() + Math.random()}
                src={url}
                alt={`Preview ${index}`}
              />
            ))}
          </div> */}
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
          >
            Close
          </button>
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
