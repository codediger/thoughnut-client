import React from "react";

import Flex, { Item } from "./Flex";
import Text from "./Text";
import Button from "./Button";
import ProductList from "./ProductList";
import Cart from "./Cart";

const nav = [
  {
    name: "All"
  },
  {
    name: "Recently added"
  },
  {
    name: "On sale"
  }
];

const HomeContainer = props => (
  <Flex>
    <Item grow wrap width="60%">
      <Flex>
        <div style={{ marginBottom: 48 }}>
          <Item>
            <Text as="h4" color="brown">
              Menu:
            </Text>
            {nav.map(item => (
              <Button inverse noBorder key={item.name}>
                {item.name}
              </Button>
            ))}
          </Item>
        </div>
      </Flex>
      <ProductList product={props.data} onProductCardClick={props.onProductCardClick}/>
    </Item>
    <Item shrink width="30%">
      <div className="cart">
        <Cart cart={props.data} />
      </div>
    </Item>
  </Flex>
);

export default HomeContainer;
