import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ name="", icon, action }) => {

  return (
    <button onClick={action}>
      {icon ? <FontAwesomeIcon icon={icon} /> : ""}&nbsp;
      {name}
    </button>
  );
};

Button.propTypes = {
  btnProps: PropTypes.shape({
    btnName: PropTypes.string,
    btnIcon: PropTypes.object,
    btnAction: PropTypes.func.isRequired
  })
};
