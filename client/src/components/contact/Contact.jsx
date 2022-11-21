import React, { useState, useContext } from 'react';

import { AdminLogedIn } from '../../context/AdminLogedIn';

import { CrudButton } from '../../components/crud-button';

import { useFormik } from 'formik';
import axios from 'axios';

const Alert = ({ alertMessage, type }) => {
  return (
    <div className={`alert alert-${type} alert-style`} role="alert">
      {alertMessage}
    </div>
  )
}

export const Contact = () => {
  const adminLogedIn = useContext(AdminLogedIn);

  const [error, setError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    validate: (values) => {
      const errors = {};

      if (!values.contactName) {
        errors.contactName = 'Please enter a name!'
      } else if (values.contactName.length < 4) {
        errors.contactName = 'Please enter a valid name!'
      }

      if (!values.contactEmail) {
        errors.contactEmail = 'Please enter an email address!';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contactEmail)) {
        errors.contactEmail = 'Invalid email address';
      }

      if (values.contactNumber === '') {
        errors.contactNumber = ''
      } else if (values.contactNumber.length > 10) {
        errors.contactNumber = 'Invalid phone number format!'
      } else if (values.contactNumber.length < 10) {
        errors.contactNumber = 'Invalid phone number format!'
      }

      if (!values.contactMessage) {
        errors.contactMessage = 'Please enter a message!'
      }

      setError(errors);
      return errors;
    },
    initialValues: {
      contactName: '',
      contactEmail: '',
      contactNumber: '',
      contactMessage: ''
    },
    onSubmit: async values => {
      await axios.post('http://localhost:8080/api/contacts',
        { contactName: values.contactName, contactEmail: values.contactEmail, contactNumber: values.contactNumber, contactMessage: values.contactMessage }
      ).then((response) => {
        console.log(response);
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      }).catch((error) => {
        setError(error)
      });
    }
  });

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          {
            adminLogedIn.login ? <CrudButton crudAction='Edit' /> : <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          }
          <div className="divider-custom-line"></div>
        </div>
        <h3 className="text-center text-secondary">My Number: (937) - 424 6188</h3>
        <h3 className="text-center text-secondary">My Email: leonsua@gmail.com</h3>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-3">
                <input className="form-control" id="contactName" type="text" placeholder="Enter your name..." data-sb-validations="required"
                  value={formik.values.contactName}
                  onChange={formik.handleChange}
                />
                <label htmlFor="name">Name</label>
                {error.contactName ? <div className='form-field-error'>{error.contactName}</div> : ''}

              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="contactEmail" type="email" placeholder="name@example.com" data-sb-validations="required,email"
                  value={formik.values.contactEmail}
                  onChange={formik.handleChange}
                />
                <label htmlFor="email">Email address</label>
                {error.contactEmail ? <div className='form-field-error'>{error.contactEmail}</div> : ''}
              </div>
              <div className="form-floating mb-3">
                <input className="form-control" id="contactNumber" type="tel" placeholder="(123) 456-7890" data-sb-validations="required"
                  value={formik.values.contactNumber}
                  onChange={formik.handleChange}
                />
                <label htmlFor="phone">Phone number</label>
                {error.contactNumber ? <div className='form-field-error'>{error.contactNumber}</div> : ''}
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" id="contactMessage" type="text" placeholder="Enter your message here..." data-sb-validations="required"
                  value={formik.values.contactMessage}
                  onChange={formik.handleChange}
                ></textarea>
                <label htmlFor="message">Message</label>
                {error.contactMessage ? <div className='form-field-error'>{error.contactMessage}</div> : ''}
              </div>
              <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
              <div className='alerts-section'>
                {
                  submitSuccess ? <Alert alertMessage='Thanks! We will be in touch soon!' type='success' /> : ''
                }
                {
                  // error ? <Alert alertMessage='Something went wrong! Please try again later!' type='danger' /> : ''
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}