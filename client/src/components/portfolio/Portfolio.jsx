import React, { useState } from 'react';

import { useGetProjects } from '../../hooks/api/getProjects';

import { Loading } from '../../components/loading';
import { ServerError } from '../server-error';

export const Portfolio = () => {
  const [singleProject, setSingleProject] = useState([{
    projectName: '',
    projectRepo: '',
    projectWebsite: '',
    projectAutor: '',
    projectDescription: ''
  }]);
  const [loading, projects, error] = useGetProjects();
  if (!projects) return null;

  const handleOnSingleProject = (projectID) => {
    const singleProject = projects.filter(project => project._id === projectID);
    setSingleProject(singleProject);
  }
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        {error !== undefined ? <ServerError /> :
          <div>
            {loading ? <div className='text-center align-items-center justify-content-center h-100 w-100'><Loading spinnerStyle='success'/></div> :
              <div className="portfolio-grid">
                {
                  projects.map((project, key) => {
                    return (
                      <div key={key}>
                        <div>
                          <div>
                            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1" onClick={() => handleOnSingleProject(project._id)}>
                              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white">{project.projectName}</div>
                              </div>
                              <img className="img-fluid" src={project.projectImage} alt={project.projectName} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            }
          </div>
        }
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
              <div className="modal-body text-center pb-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-singleP">{singleProject[0].projectName}</h2>
                      <h5 className='text-secondary mb-0'>by {singleProject[0].projectAutor}</h5>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img className="img-fluid rounded mb-5" src={singleProject[0].projectImage} alt={singleProject[0].projectName} />
                      <p className="mb-4">{singleProject[0].projectDescription}</p>
                      <a className="btn btn-primary button-margin" target='_blank' rel="noreferrer" href={singleProject[0].projectRepo}>
                        Repository
                    </a>
                      <a className="btn btn-primary button-margin" target='_blank' rel="noreferrer" href={singleProject[0].projectWebsite}>
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
    </section>
  )
}