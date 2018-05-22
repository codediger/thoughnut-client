import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: brown;
  color: white;
  border: 1px solid brown;
  border-radius: 3px;
  padding: ${props => (props.small ? "4px 12px" : "8px 16px")};
  font-size: ${props => (props.small ? "12px" : "14px")};
  font-weight: 500;
  ${props => props.width && `width: ${props.width}`};
  ${props =>
    props.inverse &&
    css`
      background: white;
      color: brown;
    `};
  ${props =>
    props.noBorder &&
    css`
      border: unset;
    `};
`;

export default Button;
