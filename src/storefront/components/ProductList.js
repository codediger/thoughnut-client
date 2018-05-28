import React, { Fragment } from "react";

import ProductListItem from "./ProductListItem";

const ProductList = (props) => (
  <Fragment>
    {props.product.products.map(product => (
      <ProductListItem
        product={product}
        key={product.id}
        handleProductCardClick={props.handleProductCardClick}
        handleAddToCart={props.handleAddToCart}
        handleSelect={props.handleSelect}
        handleInputChange={props.handleInputChange}
      />
    ))}
  </Fragment>
);
export default ProductList;
