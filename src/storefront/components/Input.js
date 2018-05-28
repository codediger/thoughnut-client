import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding-left: 12px;
  font-size: 14px;
  color: #676767;
  height: ${props => (props.height ? props.height : "40px")};
  width: ${props => (props.width ? props.width : "auto")};
  border-radius: 3px;
  border: 1px solid #c0c0c0;
  &:focus {
    outline: 1px solid brown;
  }
`;

export default Input;
