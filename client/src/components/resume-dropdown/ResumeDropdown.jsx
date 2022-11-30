import React from 'react';

import axios from 'axios';
import fileDownload from 'js-file-download';

import { ResumeModal } from '../../components/modal';

export const ResumeDropdown = () => {

  const handleOnDownloadResume = () => {
    axios({url: 'http://localhost:8080/api/downloads/download-resume', method: "GET" ,responseType: "blob"}).then((response) => {
      fileDownload(response.data, "Leon Suarez Resume.pdf");
    }).catch((error) => {
      console.log(error);
      });
  }

  return (
    <div>
      <li className="nav-item mx-0 mx-lg-1">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle nav-link py-3 px-0 px-lg-3 rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resume
          </button>
          <ul className="dropdown-menu">
            <li>
              <div className="dropdown-item" data-bs-toggle="modal" data-bs-target="#portfolioModal2">See My Resume
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white" />
                </div>
              </div>
            </li>
            <li><button className="dropdown-item" onClick={handleOnDownloadResume} >Download My Resume</button></li>
          </ul>
        </div>
      </li>
      <ResumeModal
        name={'Leon Suarez'}
      />
    </div>
  )
}