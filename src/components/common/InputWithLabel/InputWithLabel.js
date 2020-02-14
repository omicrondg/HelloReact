import React from 'react';
import { Input } from '../';

const InputWithLabel = ({params}) => {

    return ( 
        <>
        <label htmlFor={params.id}></label>
        <Input params={params} />
        </>
     );
}
 
export default InputWithLabel;