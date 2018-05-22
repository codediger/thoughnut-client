import React from "react";
import styled, { css } from "styled-components";

import Flex, { Item } from "./Flex";
import Card, { Meta } from "./Card";
import Image from "./Image";
import Text from "./Text";
import Button from "./Button";
import Select from "./Select";

const ProductListItem = props => {
  const { product, onProductCardClick } = props;
  const onClick = () => onProductCardClick(product);
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
          <Item>
            <Item justifyContent="flex-start" width="70%">
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
            <Select>
              <option value="name">jumbo</option>
              <option value="max">max</option>
            </Select>
          </Item>
          <Item>
            <Button small inverse>
              Add to cart
            </Button>
          </Item>
        </Flex>
      </Meta>
    </Card>
  );
};
export default ProductListItem;
