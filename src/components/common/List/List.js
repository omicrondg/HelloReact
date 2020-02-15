import React from "react";
import { ListItem } from "../";

export const List = ({ data, removeItem }) => {
    
  const showAlert = (value, e) => {
      e.persist();
    console.log(e);
    alert(value);
  }

  const renderListItems = () => {
    return data.map(element => 
      <ListItem key={element} onItemClick={showAlert} onBtnClick={removeItem}>
        {element}
      </ListItem>
    );
  }

  return <ul>{renderListItems()}</ul>;
};
