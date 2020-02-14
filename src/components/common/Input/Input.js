import React from 'react';

const Input = ({params}) => {
    
    const {id, type = "text", name = "", placeholder = "", lblText} = params;
    
    return (
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
    >{lblText}</input>
    );
}
 
export default Input;