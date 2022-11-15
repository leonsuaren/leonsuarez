import React from 'react';

export const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center" id='page-top'>
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src="./leonsuarezavataredited_ccexpress.png" alt="Leon Suarez" />
        <h1 className="masthead-heading text-uppercase mb-0">Leon Suarez</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">Full Stack Web Developer</p>
      </div>
    </header>
  )
}