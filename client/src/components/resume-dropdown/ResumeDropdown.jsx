import React from 'react';

import { ResumeModal } from '../../components/modal';

export const ResumeDropdown = () => {
  return (
    <div>
      <li className="nav-item mx-0 mx-lg-1">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle nav-link py-3 px-0 px-lg-3 rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resume
          </button>
          <ul class="dropdown-menu">
            <li>
              <div class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#portfolioModal2">See My Resume
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white" />
                </div>
              </div>
            </li>
            <li><a class="dropdown-item" href="#">Download My Resume</a></li>
          </ul>
        </div>
      </li>
      <ResumeModal
        name={'Leon Suarez'}
      />
    </div>
  )
}