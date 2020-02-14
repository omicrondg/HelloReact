import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from '../';

export const ListItem = ({ children, onItemClick, onBtnClick, ...rest }) => {

  let btnRemoveProps = {
    btnName: "Remove",
    btnIcon: faTimes,
    btnAction: () => onBtnClick(children)
  };
  
  return (
           <>
             <li
               onClick={e => onItemClick(children, e)}
               className="list-item"
               {...rest}
             >
               {children}
             </li>
             <Button btnProps={btnRemoveProps} />
           </>
         );
       };