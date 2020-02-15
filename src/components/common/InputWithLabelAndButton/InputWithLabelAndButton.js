import React from "react";
import { Input, Button } from "../";

export const InputWithLabelAndButton = ({
  id,
  type = "text",
  inputName = "",
  placeholder = "",
  lblText,
  btnName = "",
  btnIcon,
  btnAction
}) => {

  return (
    <>
      <label htmlFor={id}>{lblText}</label>
      <Input id={id} type={type} name={inputName} placeholder={placeholder} />
      <Button
        name={btnName}
        icon={btnIcon}
        action={btnAction
        }
      />
    </>
  );
};
