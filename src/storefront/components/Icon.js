import React from "react";
import PropTypes from "prop-types";

const Icon = ({ fa, style }) => <i className={`fa ${fa}`} style={style} />;

Icon.propTypes = {
  fa: PropTypes.string.isRequired,
  style: PropTypes.object
};
export default Icon;
