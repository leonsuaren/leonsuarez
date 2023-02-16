import React from 'react';

export const Modal = ({ children, modalName }) => {
  return (
    <div className="portfolio-modal modal fade" id={modalName} tabIndex="-1" aria-labelledby={modalName} aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          { children }
        </div>
      </div>
    </div>
  )
}

export const ResumeModal = ({ children }) => {

  return (
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
            { children }
        </div>
      </div>
    </div>
  )
}