import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ btnProps }) => {

    const {btnName, btnIcon, btnAction} = btnProps;
    return (
      <button onClick={ btnAction }>
        {<FontAwesomeIcon icon={ btnIcon } />}&nbsp;
        { btnName }
      </button>
    );
}