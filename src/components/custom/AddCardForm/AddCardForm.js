import React from 'react';
import {Form} from '../../containers/Form/Form';
import {Fieldset} from '../../containers/Fieldset/Fieldset';
import {InputWithLabelAndButton} from '../../common';

export const AddCardForm = ({ action }) => {
    
    return ( 
        <>
            <Form>
                <Fieldset legend="Add Card Form">
                    <InputWithLabelAndButton 
                    id="addCard" 
                    type="text"
                    placeholder="Enter card name"
                    lblText="Add Card"
                    btnName="Add"
                    btnAction={action}
                    />
                </Fieldset>
            </Form>

        </>
     );
}
 