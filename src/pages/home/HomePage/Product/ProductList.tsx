import React, { useEffect } from "react";

import "./ProductList.scss";
import ProductLayout from "@components/Product-layout/ProductLayout";
import { useTranslation } from "react-i18next";
import apis from "@/apis";

function ProductList() {
  const [category, setCategory] = React.useState([]);
  useEffect(() => {
    apis.category.findAll().then((res) => {
      setCategory(res.data);
      console.log("category", res.data);
    });
  }, []);

  const { t } = useTranslation();
  return (
    <div className="product-list">
      <h2>{t("telephone")}</h2>
      <div className="brand-filters">
        {category.map((category) => (
          <button key={category.id} className="brand-button">
            {category.name}
          </button>
        ))}
      </div>

      <ProductLayout></ProductLayout>
    </div>
  );
}

export default ProductList;
