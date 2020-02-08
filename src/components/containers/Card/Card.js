import React from "react";
import { Heading, Paragraph, List, Button } from "../../common";
import Style from './Card.module.css';

export const Card = ({cardData, removeCard, removeItem}) => {

  const {heading, description, listData, id} = cardData;
  
  return (
    <div className={Style.Card}>
      <Heading>{heading}</Heading>
      <Paragraph>{description}</Paragraph>
      <List data={listData} removeItem={value => removeItem(id, listData.filter(v=> v !== value))}/>
      <Button name="Delete" doAction={() => removeCard(id)}/>
    </div>
  );
};