import React from 'react';

export const Input = ({ id, type = "text", name = "", value = "", placeholder = "" }) => {

  return (
    <input 
    id={id}
    type={type} 
    name={name} 
    value={value} 
    placeholder={placeholder} 
    />
  );
};
 