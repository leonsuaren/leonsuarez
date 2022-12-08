import React, { useState } from 'react';

import { useFormik } from 'formik';
import axios from 'axios';
import { Loading } from '../loading';

const Alert = ({ message, alertType }) => {
  return (
    <div className={`alert alert-${alertType}`} role="alert">
      { message }
    </div>
  )
}

export const AddProjectModal = () => {
  const [alert, setAlert] = useState('success');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    validate: values => {
      const errors = {};

      if (!values.projectName) {
        errors.projectName = "Please Enter a Name"
      }
      if (!values.projectAutor) {
        errors.projectAutor = "Please Enter an Autor"
      }
      if (!values.projectRepo) {
        errors.projectRepo = "Please Enter a Github Repository"
      }
      if (!values.projectWebsite) {
        errors.projectWebsite = "Please Enter a Website"
      }
      if (!values.projectDescription) {
        errors.projectDescription = "Please Enter a Description"
      }
      return errors;
    },
    initialValues: {
      projectName: '',
      projectAutor: '',
      projectDescription: '',
      projectRepo: '',
      projectWebsite: '',
      projectImage: ''
    },
    onSubmit: async values => {
      setLoading(false);
      await axios.post('http://localhost:8080/api/projects/create-project', {
        projectName: values.projectName,
        projectAutor: values.projectAutor,
        projectDescription: values.projectDescription,
        projectRepo: values.projectRepo,
        projectWebsite: values.projectWebsite
      }).then((response) => {
        setMessage(response.data.message);
        setAlert('success');
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
        setTimeout(() => {
          setMessage('');
        }, 6000);
      }).catch((error) => {
        setMessage(error.response.data.message);
        setAlert('danger');
      });
    }
  });

  console.log(message);

  const handleOnCancelCreateProject = () => {

  }

  return (
    <div className="portfolio-modal modal fade" id="addProjectModal" tabIndex="-1" aria-labelledby="addProjectModal" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div>
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-singleP">Create a Project Card</h2>
                  </div>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                  </div>
                  {
                    message.length > 0 ? 
                    <div>
                      {
                        loading ? <Loading /> : <div><Alert message={message} alertType={alert}/></div>
                      }
                    </div> : ''
                  }
                  <div className="modal-body">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-floating mb-3">
                        <input className="form-control capitalized" id="projectName" type="text" placeholder="Enter your name..." data-sb-validations="required"
                          value={formik.values.projectName}
                          onChange={formik.handleChange}
                          disabled={loading}
                        />
                        <label htmlFor="name">Project Name</label>
                        {formik.errors.projectName ? <div className='form-field-error'>{formik.errors.projectName}</div> : ''}
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control capitalized" id="projectAutor" type="text" placeholder="Enter your name..." data-sb-validations="required"
                          value={formik.values.projectAutor}
                          onChange={formik.handleChange}
                          disabled={loading}
                        />
                        <label htmlFor="name">Autor</label>
                        {formik.errors.projectAutor ? <div className='form-field-error'>{formik.errors.projectAutor}</div> : ''}
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="projectRepo" type="text" placeholder="Enter your name..." data-sb-validations="required"
                          value={formik.values.projectRepo}
                          onChange={formik.handleChange}
                          disabled={loading}
                        />
                        <label htmlFor="name">Repository</label>
                        {formik.errors.projectRepo ? <div className='form-field-error'>{formik.errors.projectRepo}</div> : ''}
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="projectWebsite" type="text" placeholder="Enter your name..." data-sb-validations="required"
                          value={formik.values.projectWebsite}
                          onChange={formik.handleChange}
                          disabled={loading}
                        />
                        <label htmlFor="name">Website</label>
                        {formik.errors.projectWebsite ? <div className='form-field-error'>{formik.errors.projectWebsite}</div> : ''}
                      </div>
                      <div className="form-floating mb-3">
                        <textarea className="form-control" id="projectDescription" type="text" placeholder="Enter your name..." data-sb-validations="required"
                          value={formik.values.projectDescription}
                          onChange={formik.handleChange}
                          disabled={loading}
                        />
                        <label htmlFor="name">Description</label>
                        {formik.errors.projectDescription ? <div className='form-field-error'>{formik.errors.projectDescription}</div> : ''}
                      </div>
                      <div className="form-floating mb-3">
                        <button className="form-control" id="projectImage" type="file" data-sb-validations="required">Select an Image</button>
                        {// {error.contactName ? <div className='form-field-error'>{error.contactName}</div> : ''}
                        }
                      </div>
                      <div>
                        <button className="btn btn-danger button-margin" type="button" data-bs-dismiss="modal" aria-label="Close" disabled={loading}
                          onClick={handleOnCancelCreateProject}
                        >
                          Cancel
                        </button>
                        <button className="btn btn-primary button-margin" type="submit" id="submitButton" disabled={loading}>
                          Create Project
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}