import React from 'react';

export const CrudButton = ({ crudAction }) => {
  console.log(crudAction);
  return (
    <button className='btn btn-xl btn-outline-light crud-button-style'>{ crudAction }</button>
  )
}