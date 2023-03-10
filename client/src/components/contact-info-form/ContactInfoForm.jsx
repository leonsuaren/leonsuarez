import React, { useState, useContext } from 'react';

import { AdminLogedIn } from '../../context/AdminLogedIn';

import { useFormik } from 'formik';
import axios from 'axios';

const Alert = ({ alertMessage, type }) => {
  return (
    <div className={`alert alert-${type} alert-style`} role="alert">
      {alertMessage}
    </div>
  )
};

export const ContactInfoForm = () => {
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
    onSubmit: async (values, {resetForm}) => {
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
      resetForm({ values: '' })
    }
  });

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-xl-7">
        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input className="form-control" disabled={adminLogedIn.login ? true : false} id="contactName" type="text" placeholder="Enter your name..." data-sb-validations="required"
              value={formik.values.contactName}
              onChange={formik.handleChange}
            />
            <label htmlFor="name">Name</label>
            {error.contactName ? <div className='form-field-error'>{error.contactName}</div> : ''}

          </div>
          <div className="form-floating mb-3">
            <input className="form-control" disabled={adminLogedIn.login ? true : false} id="contactEmail" type="email" placeholder="name@example.com" data-sb-validations="required,email"
              value={formik.values.contactEmail}
              onChange={formik.handleChange}
            />
            <label htmlFor="email">Email address</label>
            {error.contactEmail ? <div className='form-field-error'>{error.contactEmail}</div> : ''}
          </div>
          <div className="form-floating mb-3">
            <input className="form-control" disabled={adminLogedIn.login ? true : false} id="contactNumber" type="tel" placeholder="(123) 456-7890" data-sb-validations="required"
              value={formik.values.contactNumber}
              onChange={formik.handleChange}
            />
            <label htmlFor="phone">Phone number</label>
            {error.contactNumber ? <div className='form-field-error'>{error.contactNumber}</div> : ''}
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" disabled={adminLogedIn.login ? true : false} id="contactMessage" type="text" placeholder="Enter your message here..." data-sb-validations="required"
              value={formik.values.contactMessage}
              onChange={formik.handleChange}
            ></textarea>
            <label htmlFor="message">Message</label>
            {error.contactMessage ? <div className='form-field-error'>{error.contactMessage}</div> : ''}
          </div>
          <button className="btn btn-primary btn-xl" disabled={adminLogedIn.login ? true : false} id="submitButton" type="submit">Send</button>
          <div className='alerts-section'>
            {
              submitSuccess ? <Alert alertMessage='Thanks! We will be in touch soon!' type='success' /> : ''
            }
          </div>
        </form>
      </div>
    </div>
  )
}