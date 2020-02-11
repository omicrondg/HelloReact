import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ name, icon, doAction }) => {

    return (
      <button onClick={doAction}>
        {<FontAwesomeIcon icon={ icon } />}&nbsp;
        {name}
      </button>
    );
}