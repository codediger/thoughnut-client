import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = ({ as, small, children }) => {
  const Wrapper = styled[as ? as : "section"]`
    margin: ${props => (props.small ? "0 2%" : "0 5%")};
    width: 100%;
  `;

  return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
  as: PropTypes.string,
  small: PropTypes.bool,
  children: PropTypes.any.isRequired
};

export default Container;
