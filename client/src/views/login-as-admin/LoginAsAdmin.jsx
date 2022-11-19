import React from 'react';
import { Link } from 'react-router-dom';

export const LoginAsAdmin = () => {
  return (
    <div className='login-as-admin-body'>
      <div className='login-as-admin-window'>
        <div className='login-as-admin-inner-div'>
          <div className='login-as-admin-wrapper'>
            <h5>Login as Admin</h5>
            <form className='login-as-admin-form'>
              <div className="login-as-admin-input">
                <label htmlFor="adminName">Admin</label>
                <input className="login-input" id="adminName" type="password" data-sb-validations="required"
                />
              </div>
              <div className="login-as-admin-input">
                <label htmlFor="adminPassword">Password</label>
                <input className="login-input" id="adminPassword" type="password" data-sb-validations="required"
                />
              </div>
              <div className='login-as-admin-form-buttons'>
                <button className='btn btn-lg btn-outline-light'>LOGIN</button>
                <Link className='btn btn-lg btn-outline-light' to='/'>CANCEL</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}