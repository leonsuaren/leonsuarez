import React from 'react';

export const ServerError = () => {
  return (
    <div className='text-center align-items-center justify-content-center h-100 w-100'>
      <h1 className='page-section-heading text-center text-uppercase text-secondary mb-0 error-margin'>404</h1>
      <h3 className='page-section-heading text-center text-secondary mb-0 error-margin'>Sorry!!</h3>
      <h3 className='page-section-heading text-center text-secondary mb-0 error-margin'>Somenthing went wrong on my side.</h3>
      <h3 className='page-section-heading text-center text-secondary mb-0 error-margin'>Please try again later!!</h3>
    </div>
  )
}