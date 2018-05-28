import React from "react";
import PropTypes from "prop-types";

const Icon = ({ fa, style, onClick }) => (
  <i className={`fa ${fa}`} style={style} onClick={onClick} />
);

Icon.propTypes = {
  fa: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func
};
export default Icon;
