import React, { useContext } from 'react';

import { AdminLogedIn } from '../../context/AdminLogedIn';
import { CrudButton } from '../../components/crud-button';

export const Header = () => {
  const adminLogedIn = useContext(AdminLogedIn);


  return (
    <header className="masthead bg-primary text-white text-center" id='page-top'>
    <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src="./leonsuarezavataredited_ccexpress.png" alt="Leon Suarez" />
        <h1 className="masthead-heading text-uppercase mb-0">Leon Suarez</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          {
            adminLogedIn.login ? <CrudButton crudAction='Edit' /> : <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          }
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">Full Stack Web Developer</p>
      </div>
      <div className="text-center mt-4">
        <a className="btn btn-xl btn-outline-light" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leon-suarez/">
          LinkedIn
        </a>
      </div>
    </header>
  )
}