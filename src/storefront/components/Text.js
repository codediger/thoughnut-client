import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Text = props => {
  const Heading = styled[props.as]`
    color: ${props.color ? props.color : "rgba(0, 0, 0, 0.86)"};
    font-weight: 400;
    margin: 8px 0;
    ${props.bold &&
      css`
        font-weight: 500;
      `};
  `;

  return (
    <Heading onClick={props.onClick} style={props.style}>
      {props.children}
    </Heading>
  );
};

Text.propTypes = {
  as: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object
};

export default Text;
