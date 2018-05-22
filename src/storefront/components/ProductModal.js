import React from "react";

import "./ProductModal.css";

const ProductModal = props => {
  const display = props.display ? "flex" : "none";
  return (
    <div
      className="product-modal"
      id="productModal"
      style={{ display: `${display}` }}
    >
      <div className="product-modal-container">ProductModal</div>
    </div>
  );
};

export default ProductModal;
