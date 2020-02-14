import React from "react";
import { Heading, Paragraph, List, Button } from "../../common";
import Style from './Card.module.css';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const Card = ({cardData, removeCard, removeItem}) => {

  const {heading, description, listData, id} = cardData;

  let btnDeleteProps = {
    btnName: "Delete",
    btnIcon: faTrashAlt,
    btnAction: () => removeCard(id)
  };
  
  return (
    <div className={Style.Card}>
      <Heading>{heading}</Heading>
      <Paragraph>{description}</Paragraph>
      <List data={listData} removeItem={value => removeItem(id, listData.filter(v=> v !== value))}/>
      <Button btnProps={btnDeleteProps}/>
    </div>
  );
};