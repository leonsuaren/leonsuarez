import React from 'react';
import { useFormik } from 'formik';

export const AddProjectModal = () => {

  const formik = useFormik({
    initialValues: {
      projectName: '',
      projectAutor: '',
      projectDescription: '',
      projectRepository: '',
      projectWebsite: '',
      projectImage: ''
    },
    onSubmit: values => {
      console.log(values);
    }
  });

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
                  <div className="modal-body">
                    <form>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="contactName" type="text" placeholder="Enter your name..." data-sb-validations="required"
                        />
                        <label htmlFor="name">Name</label>
     
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="contactName" type="text" placeholder="Enter your name..." data-sb-validations="required"
                        />
                        <label htmlFor="name">Autor</label>
                        {// {error.contactName ? <div className='form-field-error'>{error.contactName}</div> : ''}
                      }
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="contactName" type="text" placeholder="Enter your name..." data-sb-validations="required"
                        />
                        <label htmlFor="name">Description</label>
                        {// {error.contactName ? <div className='form-field-error'>{error.contactName}</div> : ''}
                      }
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="contactName" type="text" placeholder="Enter your name..." data-sb-validations="required"
                        />
                        <label htmlFor="name">Repository</label>
                        {// {error.contactName ? <div className='form-field-error'>{error.contactName}</div> : ''}
                      }
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="contactName" type="text" placeholder="Enter your name..." data-sb-validations="required"
                        />
                        <label htmlFor="name">Website</label>
                        {// {error.contactName ? <div className='form-field-error'>{error.contactName}</div> : ''}
                      }
                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="contactName" type="text" placeholder="Enter your name..." data-sb-validations="required"
                        />
                        <label htmlFor="name">Image</label>
                        {// {error.contactName ? <div className='form-field-error'>{error.contactName}</div> : ''}
                      }
                      </div>
                    </form>
                  </div>
                  <div>
                    <button className="btn btn-danger button-margin" type="button" data-bs-dismiss="modal" aria-label="Close">
                      Cancel
                    </button>
                    <button className="btn btn-primary button-margin" type="submit" >
                      Create Project
                    </button>
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