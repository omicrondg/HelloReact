import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../";

export const ListItem = ({ children, onItemClick, onBtnClick, ...rest }) => {

  return (
    <>
      <li
        onClick={e => onItemClick(children, e)}
        className="list-item"
        {...rest}
      >
        {children}
      </li>
      <Button 
        icon = { faTimes }
        action = {() => onBtnClick(children)}
      />
    </>
  );
};
