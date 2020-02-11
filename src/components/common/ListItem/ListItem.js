import React from 'react';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from '../';

export const ListItem = ({ children, onItemClick, onBtnClick, ...rest }) => {
  const deleteBtnIcon = faTrashAlt;
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
               name="Remove"
               icon={deleteBtnIcon}
               doAction={() => onBtnClick(children)}
             />
           </>
         );
       };