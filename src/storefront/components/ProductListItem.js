import React from "react";
import styled, { css } from "styled-components";
import { Mutation } from "react-apollo";

import Flex, { Item } from "./Flex";
import Card, { Meta } from "./Card";
import Image from "./Image";
import Text from "./Text";
import Button from "./Button";
import Sizes from "./Sizes";
import Input from "./Input";
import { ADD_TO_CART, GET_CART } from "../../api/cart";

const ProductListItem = props => {
  const {
    product,
    handleProductCardClick,
    handleSelect,
    handleInputChange
  } = props;
  const onClick = () => handleProductCardClick(product);
  return (
    <Card key={product.id}>
      <Image
        src={product.pictures[0].url}
        alt={product.name}
        style={{ width: 280, height: 200 }}
        onClick={onClick}
      />
      <Meta>
        <Flex column>
          <Item>
            <Text as="h4" bold onClick={onClick}>
              {product.name}
            </Text>
          </Item>
          <Item justifyContent="flex-start" width="auto">
            {product.pricing.discountedPrice ? (
              <Text as="h5">
                <span className="cross-text">{`$${
                  product.pricing.basePrice
                }`}</span>
              </Text>
            ) : (
              <Text as="h5">{`$${product.pricing.basePrice}`}</Text>
            )}
            <span style={{ paddingRight: 8 }} />
            {product.pricing.discountedPrice && (
              <Text as="h5" color="red">
                {`$${product.pricing.discountedPrice}`}
              </Text>
            )}
          </Item>
          <Item style={{ marginBottom: 16 }}>
            <Item justifyContent="flex-start" width="auto">
              <Text as="h5" style={{ paddingRight: 8 }}>
                Quantity:
              </Text>
              <Input
                name="quantity"
                width="32px"
                height="32px"
                type="number"
                min={1}
                defaultValue={1}
                onChange={handleInputChange}
              />
            </Item>
            <Sizes handleSelect={handleSelect} />
          </Item>
          <Item>
            <Mutation
              mutation={ADD_TO_CART}
              update={(cache, { data: { addToCart } }) => {
                const { userCartItems } = cache.readQuery({ query: GET_CART });
                cache.writeQuery({
                  query: GET_CART,
                  data: { userCartItems: userCartItems.concat[addToCart] }
                });
              }}
              onError={error => console.log(error)}
            >
              {(mutationFunction, { loading, error }) => {
                if (loading) {
                  return <span> Adding...</span>;
                }
                return (
                  <Button
                    small
                    inverse
                    onClick={() =>
                      props.handleAddToCart(mutationFunction, product)
                    }
                  >
                    Add to cart
                  </Button>
                );
              }}
            </Mutation>
          </Item>
        </Flex>
      </Meta>
    </Card>
  );
};
export default ProductListItem;
