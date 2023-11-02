import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {};

function Button(props) {
  const { url, icon, className } = props;
  return (
    <button>
      <i className={className}></i>
    </button>
  );
}

export default Button;
