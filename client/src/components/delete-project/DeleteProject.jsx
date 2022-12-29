import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ProjectsContext } from '../../context';
import { Loading } from '../loading';

const Alert = ({ message, alertType }) => {
  return (
    <div className={`alert alert-${alertType}`} role="alert">
      {message}
    </div>
  )
}

export const DeleteProject = ({ projectId, project }) => {
  const projectsContext = useContext(ProjectsContext);
  const projects = projectsContext.projects;
  const error = projectsContext.error;
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleOnDeleteProject = async () => {
    setLoading(true);
    setShowAlert(false);
    await axios.post('http://localhost:8080/api/projects/delete-project', { projectId: projectId }).then((response) => {
      setTimeout(() => {
        setLoading(false);
        setShowAlert(true);
      }, 3000);
      setTimeout(() => {
        const singleProjectDelete = projects.filter((project) => project._id !== projectId);
        projectsContext.setProjects(singleProjectDelete);
        document.getElementById("deleteProjectModal").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
        setShowAlert(false);
      }, 5000);
    }).catch((error) => {
      console.log(error);
      setShowAlert(false);
    });
    setShowAlert(false);
  }

  return (
    <div>
      <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
      <div className="modal-body text-center pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div>
                {
                  !loading && !showAlert ? <h3 className=" text-secondary text-uppercase mb-singleP">{`Are you sure you want to delete ${project.projectName} project?`}</h3> :
                    <div>
                      {
                        !loading && showAlert ? <Alert message={`${project.projectName} project delete success!`} alertType='success' /> : <Loading />
                      }
                    </div>
                }
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
              <button className="btn btn-danger button-margin" rel="noreferrer" data-bs-delay={`{"show":0,"hide":150}`}
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