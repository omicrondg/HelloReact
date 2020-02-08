import React from 'react';
import { Button } from '../';
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
           <Button name="Remove" doAction={() => onBtnClick(children)} />
           </>
         );
       };