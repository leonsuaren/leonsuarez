import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Contact</h4>
            <p className="lead mb-0">
              (937) - 424 - 6188
                    <br />
                    leonsua@gmail.com
                </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/leon-suarez/" target='_blank' rel="noreferrer"><i className="fab fa-fw fa-linkedin-in"></i></a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/leonsuaren" target='_blank' rel="noreferrer"><i className="fab fa-fw fa-github"></i></a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-google" target='_blank' rel="noreferrer"></i></a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/leon.suarez.925" target='_blank' rel="noreferrer"><i className="fab fa-fw fa-facebook-f"></i></a>
          </div>
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About my Web</h4>
            <p className="lead mb-0">
              I'm using Bootstrap, React, Mongoose, ExpressJS, NodeJS, it is a Full Stack Website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}