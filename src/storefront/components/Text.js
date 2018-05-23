import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Text = prop => {
  const Heading = styled[prop.as]`
    color: ${prop.color ? prop.color : "rgba(0, 0, 0, 0.86)"};
    font-weight: 400;
    margin: 8px 0;
    ${prop.bold &&
      css`
        font-weight: 500;
      `};
  `;

  return <Heading onClick={prop.onClick}>{prop.children}</Heading>;
};

Text.propTypes = {
  as: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

export default Text;
