import React from 'react';

export const Loading = ({ spinnerStyle, size }) => {
  return (
    <div className={`spinner-border text-${spinnerStyle} spinner-${size}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}