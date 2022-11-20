import React from 'react';

export const Loading = ({ spinnerStyle }) => {
  return (
    <div className={`spinner-border text-${spinnerStyle} spinner-style`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}