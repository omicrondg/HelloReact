import React from 'react';

export const Select = ({ options }) => {

    const renderSelectOptions = () => {
        return options.map(option => <option value={option}>{option}</option>);
    }

    return ( 
        <select>
            {renderSelectOptions()}
        </select>
     );
}
 