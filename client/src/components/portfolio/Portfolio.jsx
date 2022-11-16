import React from 'react';
import { useGetProjects } from '../../hooks/api/getProjects';

export const Portfolio = () => {
  const [loading, projects, error] = useGetProjects();
  if (!projects) return null;

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        {
          projects.map((project, key) => {
            return (
              <div key={key}>
                <div className="row justify-content-center">
                  <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                      </div>
                      <img className="img-fluid" src={project.projectImage} alt={project.projectName} />
                    </div>
                  </div>
                </div>
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                      <div className="modal-body text-center pb-5">
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col-lg-8">
                              <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{project.projectName}</h2>
                              <h5 className='text-secondary mb-0'>by {project.projectAutor}</h5>
                              <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                <div className="divider-custom-line"></div>
                              </div>
                              <img className="img-fluid rounded mb-5" src={project.projectImage} alt={project.projectName} />
                              <p className="mb-4">{project.projectDescription}</p>
                              <a className="btn btn-primary button-margin" target='_blank' rel="noreferrer" href={project.projectRepo}>
                                Repository
                              </a>
                              <a className="btn btn-primary button-margin" target='_blank' rel="noreferrer" href={project.projectWebsite}>
                                Website
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}