import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Text = ({ as, bold, color, children, onClick }) => {
  const Heading = styled[as]`
    color: ${color ? color : "rgba(0, 0, 0, 0.86)"};
    font-weight: 400;
    margin: 8px 0;
    ${bold &&
      css`
        font-weight: 500;
      `};
  `;

  return <Heading onClick={onClick}>{children}</Heading>;
};

Text.propTypes = {
  as: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

export default Text;
