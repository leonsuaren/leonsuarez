import React, { useState, useContext, useEffect } from 'react';

import { AdminLogedIn } from '../../context/AdminLogedIn';
import { CrudButton } from '../../components/crud-button';
import { ContactInfoForm } from '../../components/contact-info-form';
import { Loading }  from '../../components/loading';

import axios from 'axios';
import { useFormik } from 'formik';

export const Contact = () => {
  const adminLogedIn = useContext(AdminLogedIn);
  const [loading, setLoadind] = useState(false);
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      profileLanguage: 'English',
      profileNumber: profile.profileNumber,
      profileEmail: profile.profileEmail
    },
    onSubmit: async values => {
      await axios.put('http://localhost:8080/api/profile/update-profile-info',
        { profileNumber: values.profileNumber, profileEmail: values.profileEmail, profileLanguage: values.profileLanguage })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  useEffect(() => {
    const fetchProfileInfo = async () => {
      setLoadind(true);
      await axios.post('http://localhost:8080/api/profile/profile-info', { profileLanguage: "English" }).then((response) => {
        setProfile(response.data.profileInfo);
        setTimeout(() => {
          setLoadind(false);
        }, 1000);
      }).catch((error) => { console.log(error) })
    };
    fetchProfileInfo();
  }, []);
  if (!profile) return null;

  const handleOnChangeToEditMode = () => {
    setEditMode(true);
  };

  const handleOnUpdateProfileInfo = () => {
    setEditMode(false);
    setTimeout(() => {
      const fetchProfileInfo = async () => {
        setLoadind(true);
        await axios.post('http://localhost:8080/api/profile/profile-info', { profileLanguage: "English" }).then((response) => {
          setProfile(response.data.profileInfo);
          setTimeout(() => {
            setLoadind(false);
          }, 100);
        }).catch((error) => { console.log(error) })
      };
      fetchProfileInfo();
    }, 3000);
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        {
          adminLogedIn.login ?
            <form className="container d-flex align-items-center flex-column" onSubmit={formik.handleSubmit}>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                {
                  !editMode ? <CrudButton crudAction='Edit' onClick={handleOnChangeToEditMode} /> : <CrudButton crudAction='update' onClick={handleOnUpdateProfileInfo} />
                }
                <div className="divider-custom-line"></div>
              </div>
              {
                !editMode ?
                  <div className='contact--update-inputs'>
                    { loading ? <Loading /> : <h3 className="text-center text-secondary">My Number: {profile.profileNumber}</h3>}
                    { loading ? <Loading /> : <h3 className="text-center text-secondary">My Email: {profile.profileEmail}</h3>}
                  </div>
                  :
                  <div className='contact--update-inputs'>
                    <h3 className="text-center text-secondary mb-0 ">My Number:
                      <input className="masthead-subheading font-weight-light mb-0 edit-contact-input" id='profileNumber' placeholder={profile.profileNumber} value={formik.values.profileNumber} onChange={formik.handleChange} />
                    </h3>
                    <h3>My Email:
                    <input className="masthead-subheading font-weight-light mb-0 edit-contact-input" id='profileEmail' placeholder={profile.profileEmail} value={formik.values.profileEmail} onChange={formik.handleChange} />
                    </h3>
                  </div>
              }
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
              </div>
            </form>
            :
            <div>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
              </div>
              <h3 className="text-center text-secondary">My Number: {profile.profileNumber}</h3>
              <h3 className="text-center text-secondary">My Email: {profile.profileEmail}</h3>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
              </div>
            </div>
        }
        <ContactInfoForm />
      </div>
    </section>
  )
}