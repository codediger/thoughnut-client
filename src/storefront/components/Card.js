import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 280px;
  background: white;
  border-radius: 5px;
  margin-bottom: 16px;

  &:hover,
  :active {
    box-shadow: 1px 1px 4px 0 #c0c0c0;
  }
`;

export const Meta = styled.div`
  padding: 8px 16px 16px;
`;

export default Card;
