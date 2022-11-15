import React from 'react';

export const ProjectModal = () => {
  return (
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">BadBank</h2>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                  </div>
                  <img className="img-fluid rounded mb-5" src="./badbank.jpg" alt="..." />
                  <p className="mb-4">A simple app that allows you to perform the basic operations of a bank such as, making deposits, withdrawing, and checking out your balance. This App also allows you to transfer between your accounts and to other users.</p>
                  <a className="btn btn-primary button-margin" target='_blank' rel="noreferrer" href='https://github.com/leonsuaren/BadBank'>
                                Repository
                  </a>
                  <a className="btn btn-primary button-margin" target='_blank' rel="noreferrer" href='https://leonsuarezfullstackbankingapp.herokuapp.com/'>
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