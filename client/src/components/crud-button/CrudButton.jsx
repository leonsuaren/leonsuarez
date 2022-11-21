import React from 'react';

export const CrudButton = ({ crudAction, onClick, type }) => {
  return (
    <button className='btn btn-xl btn-outline-light crud-button-style' onClick={onClick} type={type}>{ crudAction }</button>
  )
}