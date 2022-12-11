import React from 'react';

export const DeleteProject = ({ projectID }) => {
  console.log(projectID);


  return (
    <div>
      <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
      <div className="modal-body text-center pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div>
                <h3 className=" text-secondary text-uppercase mb-singleP">Are you sure you want to delete this project?</h3>
              </div>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
              </div>
              <img className="img-fluid rounded mb-5" />
              <button className="btn btn-primary button-margin" rel="noreferrer" type="button" data-bs-dismiss="modal" aria-label="Close">
                CANCEL
              </button>
              <button className="btn btn-danger button-margin" rel="noreferrer" >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}