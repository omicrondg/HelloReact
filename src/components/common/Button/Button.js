import React from 'react';

export const Button = ({ name, doAction }) => {

    return <button onClick={doAction}>{name}</button>;
}