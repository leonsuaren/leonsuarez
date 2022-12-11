import React, { useState } from 'react';

import { useFormik } from 'formik';
import axios from 'axios';

import { Loading } from '../loading';

const Alert = ({ message, alertType }) => {
  return (
    <div className={`alert alert-${alertType}`} role="alert">
      {message}
    </div>
  )
}

export const AddProject = () => {
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
          formik.resetForm();
        }, 6000);
      }).catch((error) => {
        setMessage(error.response.data.message);
        setAlert('danger');
      });
    }
  });

  const handleOnCancelCreateProject = () => {
    formik.resetForm();
  }

  // const createProjectModal = new bootstrap.Modal('#createProjectModal', {
  //   keyboard: false
  // });
  // createProjectModal.hide();

  return (
        <div>
          <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" onClick={handleOnCancelCreateProject}></button></div>
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
                          loading ? <Loading /> : <div><Alert message={message} alertType={alert} /></div>
                        }
                      </div> : ''
                  }
                  <div className="modal-body" id='createProjectModal'>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-floating mb-3">
                        <input className="form-control capitalized" id="projectName" name='projectName' type="text" placeholder="Enter your name..." data-sb-validations="required"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.projectName}
                          disabled={loading}
                        />
                        <label htmlFor="name">Project Name</label>
                        {formik.touched.projectName && formik.errors.projectName ? <div className='form-field-error'>{formik.errors.projectName}</div> : null}
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control capitalized" id="projectAutor" type="text" placeholder="Enter your name..." data-sb-validations="required"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.projectAutor}
                          disabled={loading}
                        />
                        <label htmlFor="name">Autor</label>
                        {formik.touched.projectAutor && formik.errors.projectAutor ? <div className='form-field-error'>{formik.errors.projectAutor}</div> : null}
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="projectRepo" type="text" placeholder="Enter your name..." data-sb-validations="required"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.projectRepo}
                          disabled={loading}
                        />
                        <label htmlFor="name">Repository</label>
                        {formik.touched.projectRepo && formik.errors.projectRepo ? <div className='form-field-error'>{formik.errors.projectRepo}</div> : null}
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="projectWebsite" type="text" placeholder="Enter your name..." data-sb-validations="required"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.projectWebsite}
                          disabled={loading}
                        />
                        <label htmlFor="name">Website</label>
                        {formik.touched.projectWebsite && formik.errors.projectWebsite ? <div className='form-field-error'>{formik.errors.projectWebsite}</div> : null}
                      </div>
                      <div className="form-floating mb-3">
                        <textarea className="form-control" id="projectDescription" type="text" placeholder="Enter your name..." data-sb-validations="required"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.projectDescription}
                          disabled={loading}
                        />
                        <label htmlFor="name">Description</label>
                        {formik.touched.projectDescription && formik.errors.projectDescription ? <div className='form-field-error'>{formik.errors.projectDescription}</div> : null}
                      </div>
                      <div className="form-floating mb-3">
                        <button className="form-control" id="projectImage" type="file" data-sb-validations="required">Select an Image</button>
                        {// {error.contactName ? <div className='form-field-error'>{error.contactName}</div> : ''}
                        }
                      </div>
                      <div>
                        <button className="btn btn-danger button-margin" type="reset" data-bs-dismiss="modal" aria-label="Close" disabled={loading}
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
  )
}