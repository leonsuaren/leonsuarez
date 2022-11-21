import React, { useState, useContext } from 'react';

import { useGetProjects } from '../../hooks/api/getProjects';
import { AdminLogedIn } from '../../context/AdminLogedIn';

import { Loading } from '../../components/loading';
import { ServerError } from '../server-error';
import { Modal } from '../modal';
import { CrudButton } from '../../components/crud-button';

export const Portfolio = () => {
  const adminLogedIn = useContext(AdminLogedIn);

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
          {
            adminLogedIn.login ? <CrudButton crudAction='Create' /> : <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          }
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
        <Modal 
          project={singleProject[0].projectName}
          autor={singleProject[0].projectAutor}
          image={singleProject[0].projectImage}
          description={singleProject[0].projectDescription}
          repo={singleProject[0].projectRepo}
          website={singleProject[0].projectWebsite}
        />
      </div>
    </section>
  )
}