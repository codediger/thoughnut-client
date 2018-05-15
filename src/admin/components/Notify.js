import React from "react";
import { notification } from "antd";
import PropTypes from "prop-types";

const Notify = (type, message, description) => {
  notification[type]({
    message: message ? message : "",
    description: description ? description : ""
  });
};

Notify.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string,
  description: PropTypes.string
};

export default Notify;
