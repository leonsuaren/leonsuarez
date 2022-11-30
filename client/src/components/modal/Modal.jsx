import React from 'react';

export const Modal = ({ project, autor, image, description, repo, website }) => {

  return (
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div>
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-singleP">{project}</h2>
                    <h5 className='text-secondary mb-0'>by {autor}</h5>
                  </div>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                  </div>
                  <img className="img-fluid rounded mb-5" src={image} alt={project} />
                  <p className="mb-4">{description}</p>
                  <a className="btn btn-primary button-margin" target='_blank' rel="noreferrer" href={repo}>
                    Repository
                  </a>
                  <a className="btn btn-primary button-margin" target='_blank' rel="noreferrer" href={website}>
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ResumeModal = ({ name }) => {

  return (
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div>
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-singleP">{name}</h2>
                  </div>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                  </div>
                  <img className="img-fluid rounded mb-5" />
                  <a className="btn btn-primary button-margin" rel="noreferrer" >
                    Download
                  </a>
                  <a className="btn btn-primary button-margin" rel="noreferrer" >
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}