import React from "react";
import { Input, Button } from "../";

const InputWithLabelAndButton = ({ params }) => {
    const {id, lblText, btnProps} = params;

    return (
      <>
        <label htmlFor={id}>{lblText}</label>
        <Input params={params} />
        <Button btnProps={btnProps} />
      </>
    );
};

export default InputWithLabelAndButton;
