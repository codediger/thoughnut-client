import React from "react";
import styled, { css } from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column && "column"};
  flex-wrap: ${props => props.wrap && "wrap"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  width: ${({ width }) => (width ? width : "100%")};
`;

export const Item = styled.div`
  display: flex;
  flex-direction: ${props => props.column && "column"};
  flex-wrap: ${props => props.wrap && "wrap"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "space-between"};
  align-content: ${props =>
    props.alignContent ? props.alignContent : "center"};
  flex-grow: ${props => (props.grow ? 1 : 0)};
  flex-shrink: ${props => (props.shrink ? 1 : 0)};
  flex-basis: ${({ width }) => (width ? width : "100%")};
`;

export default Flex;
