import React, { useContext } from 'react';
import axios from 'axios';
import { ProjectsContext } from '../../context';

export const DeleteProject = ({ projectId, project }) => {
  const projectsContext = useContext(ProjectsContext);
  const projects = projectsContext.projects;
  const loading = projectsContext.loading;
  const error = projectsContext.error;

  console.log(project);

  const handleOnDeleteProject = async () => {
     await axios.post('http://localhost:8080/api/projects/delete-project', { projectId: projectId }).then((response) => {
      setTimeout(() => {
        const singleProjectDelete = projects.filter((project) => project._id !== projectId);
        projectsContext.setProjects(singleProjectDelete);
      }, 3000);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
      <div className="modal-body text-center pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div>
                <h3 className=" text-secondary text-uppercase mb-singleP">{`Are you sure you want to delete ${project.projectName} project?`}</h3>
              </div>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div> 
              </div>
              <img className="img-fluid rounded mb-5" />
              <button className="btn btn-primary button-margin" rel="noreferrer" type="button" data-bs-dismiss="modal" aria-label="Close">
                CANCEL
              </button>
              <button className="btn btn-danger button-margin" rel="noreferrer" 
              onClick={handleOnDeleteProject}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}