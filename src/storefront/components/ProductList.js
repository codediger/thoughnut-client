import React, { Fragment } from "react";

import ProductListItem from "./ProductListItem";

const ProductList = props => (
  <Fragment>
    {props.product.products.map(product => (
      <ProductListItem
        product={product}
        key={product.id}
        onProductCardClick={props.onProductCardClick}
      />
    ))}
  </Fragment>
);
export default ProductList;
