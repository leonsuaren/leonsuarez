import React, { useContext } from 'react';

import axios from 'axios';
import fileDownload from 'js-file-download';

import { AdminLogedIn } from '../../context/AdminLogedIn';
import { ResumeModal } from '../../components/modal';

export const ResumeDropdown = ({ name }) => {
  const adminLogedIn = useContext(AdminLogedIn);

  const handleOnDownloadResume = () => {
    axios({ url: 'http://localhost:8080/api/downloads/download-resume', method: "GET", responseType: "blob" }).then((response) => {
      fileDownload(response.data, "Leon Suarez Resume.pdf");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <div className="navdivtem mx-0 mx-lg-1">
        <div className="dropdown">
          <button className={adminLogedIn.login ? "btn btn-xl btn-outline-light dropdown-toggle rounded disabled" : "btn btn-xl btn-outline-light dropdown-toggle rounded"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resume
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#portfolioModal2">See My Resume</button></li>
            <li><button className="dropdown-item" onClick={handleOnDownloadResume} >Download My Resume</button></li>
          </ul>
        </div>
      </div>
      <ResumeModal>
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
                <img className="img-fluid rounded mb-5" alt='' src='' />
                <button className="btn btn-primary button-margin" rel="noreferrer" >
                  Download
              </button>
                <button className="btn btn-primary button-margin" type="button" data-bs-dismiss="modal" aria-label="Close" rel="noreferrer" >
                  Close
              </button>
              </div>
            </div>
          </div>
        </div>
      </ResumeModal>
    </div>
  )
}