import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Loading } from '../../components/loading';
import { AdminLogedIn } from '../../context/AdminLogedIn';

import axios from 'axios';
import { useFormik } from 'formik';

export const LoginAsAdmin = () => {
  const adminLogedIn = useContext(AdminLogedIn);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [nameSuccess, setNameSuccess] = useState(true);
  const [passwordSuccess, setPasswordSuccess] = useState(true);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      adminName: '',
      password: ''
    },
    onSubmit: async values => {
      await axios.post('http://localhost:8080/api/admin/admin-login',
        { adminName: values.adminName, password: values.password }
      ).then((response) => {
        localStorage.setItem('token', response.data.token);
        adminLogedIn.setLogin(true);
        setLoading(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }).catch((error) => {
        setError(error.response.data.message);
        if (error.response.data.message === 'Invalid Name') {
          setNameSuccess(false);
          setPasswordSuccess(true);
        } else if (error.response.data.message === 'Invalid Password') {
          setPasswordSuccess(false);
          setNameSuccess(true);
        }
      });
    }
  });

  return (
    <div className='login-as-admin-body'>
      {
        loading ? <Loading spinnerStyle='light' size='large'/> :
          <div className='login-as-admin-window'>
            <div className='login-as-admin-inner-div'>
              <div className='login-as-admin-wrapper'>
                <h5>Login as Admin</h5>
                <form className='login-as-admin-form' onSubmit={formik.handleSubmit}>
                  <div className="login-as-admin-input">
                    <label htmlFor="adminName">Admin</label>
                    <input className="login-input form-control" id="adminName" type="password" data-sb-validations="required"
                      value={formik.values.adminName}
                      onChange={formik.handleChange}
                    />
                    {nameSuccess ? '' : <div className='form-field-error'>{error}</div>}
                  </div>
                  <div className="login-as-admin-input">
                    <label htmlFor="password">Password</label>
                    <input className="login-input form-control" id="password" type="password" data-sb-validations="required"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    {passwordSuccess ? '' : <div className='form-field-error'>{error}</div>}
                  </div>
                  <div className='login-as-admin-form-buttons'>
                    <button className='btn btn-lg btn-outline-light' type='submit'>LOGIN</button>
                    <Link className='btn btn-lg btn-outline-light' to='/'>CANCEL</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
      }
    </div>
  )
}