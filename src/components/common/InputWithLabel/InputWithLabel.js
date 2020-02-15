import React from 'react';
import { Input } from '../';

const InputWithLabel = ({
  id,
  type = "text",
  name = "",
  placeholder = "",
  lblText
}) => {

  return (
    <>
      <label htmlFor={ id }>{ lblText }</label>
      <Input id={ id } type={ type } name={ name } placeholder={ placeholder } />
    </>
  );
};
 
export default InputWithLabel;