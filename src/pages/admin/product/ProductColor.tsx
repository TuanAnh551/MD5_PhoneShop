import React, { useState } from 'react'
import "./product.scss";
import { fireBaseFn } from '@/firebase';


export default function ProductColor({ isOpen, onClose }) {
  if (!isOpen) return null;
 
 
  const handleLayout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    let newFormColor = {
      color: (e.target as any).color.value,
      price: (e.target as any).price.value,
      image: await fireBaseFn.uploadToStorage((e.target as any).image.files[0]),
    };

    console.log(newFormColor);
  };
  return (
    <>
      <form onSubmit={handleLayout}>
        <div className="colorVariantsOverlay"></div>
        
        {/* Background mờ */}
        <div className="colorVariants">
          <div>
            <label htmlFor="color">Color:</label>
            <input
              type="text"
              name="color"
              id="color"
              
            />
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              id="price"
            
            />
            <label>Image:</label>
            <input
              type="file"
              name="image"
              id="image"
             
            />
          
            
              <button onClick={onClose} type="button">
                Close
              </button>
         

            <button type="submit">Add Color Variant</button>
          </div>
        </div>
      </form>
    </>
  );
}
