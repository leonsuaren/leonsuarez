import React, { useState, useContext } from 'react';

import { AdminLogedIn, ProjectsContext } from '../../context';

import { Loading } from '../../components/loading';
import { ServerError } from '../server-error';
import { Modal } from '../modal';
import { AddProject } from '../../components/add-project';
import { ReadProject } from '../../components/read-project';
import { DeleteProject } from '../../components/delete-project';

export const Portfolio = () => {
  const adminLogedIn = useContext(AdminLogedIn);
  const projectsContext = useContext(ProjectsContext);
  const projects = [].concat(projectsContext.projects).reverse();
  const error = projectsContext.error;
  const loading = projectsContext.loading;

  const [singleProject, setSingleProject] = useState([{
    projectName: '',
    projectRepo: '',
    projectWebsite: '',
    projectAutor: '',
    projectDescription: ''
  }]);
  if (!projects) return null;

  const handleOnSingleProject = (projectID) => {
    const singleProject = projects.filter(project => project._id === projectID);
    setSingleProject(singleProject);
  }

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        {
          adminLogedIn.login ?
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <button className='btn btn-xl btn-outline-light crud-button-style' data-bs-toggle="modal" data-bs-target="#addProjectModal">Create</button>
              <Modal modalName='addProjectModal'>
              <AddProject/>
            </Modal>
              <div className="divider-custom-line"></div>
            </div>
            :
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div>
            </div>
        }
        {error !== undefined ? <ServerError /> :
          <div>
            {loading ? <div className='text-center align-items-center justify-content-center h-100 w-100'><Loading spinnerStyle='success' size='large' /></div> :
              <div className="portfolio-grid">
                {
                  projects.map((project, key) => {
                    return (
                      <div key={key}>
                        <div>
                          <div>
                            {
                              adminLogedIn.login ?
                                <div className="portfolio-item mx-auto" onClick={() => handleOnSingleProject(project._id)}>
                                  <div className="portfolio-item-caption portfolio-item-grid align-items-center justify-content-center h-100 w-100">
                                    <button className='btn btn-success project-crud-action-button' onClick={() => console.log('edit')}>Edit</button>
                                    <button className='btn btn-danger project-crud-action-button' data-bs-toggle="modal" data-bs-target="#deleteProjectModal" onClick={() => handleOnSingleProject(project._id)}>delete</button>
                                  </div>
                                  <img className="img-fluid" src={project.projectImage} alt={project.projectName} />
                                </div>
                                :
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#readProjectModal" onClick={() => handleOnSingleProject(project._id)}>
                                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white">{project.projectName}</div>
                                  </div>
                                  <Modal modalName='readProjectModal'>
                                  <ReadProject
                                    project={singleProject[0].projectName}
                                    autor={singleProject[0].projectAutor}
                                    image={singleProject[0].projectImage}
                                    description={singleProject[0].projectDescription}
                                    repo={singleProject[0].projectRepo}
                                    website={singleProject[0].projectWebsite}
                                  />
                                </Modal>
                                  <img className="img-fluid" src={project.projectImage} alt={project.projectName} />
                                </div>
                            }
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
        <Modal modalName='deleteProjectModal'>
        <DeleteProject projectId={singleProject[0]._id} project={singleProject[0]}/>
        </Modal>
      </div>
    </section>
  )
}