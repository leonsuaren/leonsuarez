import React from 'react';

export const CrudButton = ({ crudAction, onClick }) => {
  return (
    <button className='btn btn-xl btn-outline-light crud-button-style' onClick={onClick}>{ crudAction }</button>
  )
}