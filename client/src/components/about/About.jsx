import React, { useContext } from 'react';

import { AdminLogedIn } from '../../context/AdminLogedIn';

import { CrudButton } from '../../components/crud-button';

export const About = () => {
  const adminLogedIn = useContext(AdminLogedIn);

  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          {
            adminLogedIn.login ? <CrudButton crudAction='Edit' /> : <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          }
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ms-auto"><p className="lead">I earned a degree in Information Technology and a Master's Degree in Entrepreneurial and Small Business Operations, and I thought that today is the perfect time to update my career and decided to start doing it by taking the Professional Certificate in Coding: Full Stack Developer with MERN on MIT xPro, Why? because I enjoy coding.</p></div>
          <div className="col-lg-4 me-auto"><p className="lead">Outside of work, I love swimming, running, and biking. Or, in other words, "Triathlons". Thriathons have taught me that the path can be difficult, but once you arrive, the reward is enormous.</p></div>
        </div>
        <div className="text-center mt-4">
          <a className={adminLogedIn.login ? "btn btn-xl btn-outline-light disabled" : "btn btn-xl btn-outline-light"} target="_blank" rel="noreferrer" href="https://www.facebook.com/leon.suarez.925">
                Facebook
            </a>
        </div>
      </div>
    </section>
  )
}