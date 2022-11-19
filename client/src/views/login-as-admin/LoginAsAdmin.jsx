import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useFormik } from 'formik';

export const LoginAsAdmin = () => {

  const formik = useFormik({
    initialValues: {
      adminName: '',
      password: ''
    },
    onSubmit: async values => {
      await axios.post('http://localhost:8080/api/admin/admin-login', 
      { adminName: values.adminName, password: values.password }
      ).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }
  });



  return (
    <div className='login-as-admin-body'>
      <div className='login-as-admin-window'>
        <div className='login-as-admin-inner-div'>
          <div className='login-as-admin-wrapper'>
            <h5>Login as Admin</h5>
            <form className='login-as-admin-form' onSubmit={formik.handleSubmit}>
              <div className="login-as-admin-input">
                <label htmlFor="adminName">Admin</label>
                <input className="login-input" id="adminName" type="password" data-sb-validations="required"
                value={formik.values.adminName}
                onChange={formik.handleChange}
                />
              </div>
              <div className="login-as-admin-input">
                <label htmlFor="password">Password</label>
                <input className="login-input" id="password" type="password" data-sb-validations="required"
                value={formik.values.password}
                onChange={formik.handleChange}
                />
              </div>
              <div className='login-as-admin-form-buttons'>
                <button className='btn btn-lg btn-outline-light' type='submit'>LOGIN</button>
                <Link className='btn btn-lg btn-outline-light' to='/'>CANCEL</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}