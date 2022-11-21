import React, { useContext, useState, useEffect } from 'react';

import axios from 'axios';
import { useFormik } from 'formik';

import { AdminLogedIn } from '../../context/AdminLogedIn';
import { CrudButton } from '../../components/crud-button';

export const Header = () => {
  const adminLogedIn = useContext(AdminLogedIn);
  const [loading, setLoadind] = useState(false);
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      profileLanguage: 'English',
      profileName: '',
      profileTitle: ''
    },
    onSubmit: async values => {
      await axios.put('http://localhost:8080/api/profile/update-profile-info',
        { profileName: values.profileName, profileTitle: values.profileTitle, profileLanguage: values.profileLanguage })
        .then((response) => {
          console.log(response);
        })
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

  console.log(profile);

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
  }

  return (
    <header className="masthead bg-primary text-white text-center" id='page-top'>
      <form className="container d-flex align-items-center flex-column" onSubmit={formik.handleSubmit}>
        <img className="masthead-avatar mb-5" src="./leonsuarezavataredited_ccexpress.png" alt="Leon Suarez" />
        {
          editMode ?
            <div>
              {
                !loading && <input className="masthead-heading text-uppercase mb-0 edit-input" id='profileName' placeholder='Name' value={formik.values.profileName} onChange={formik.handleChange} />
              }
            </div>
            :
            <div>
              {
                !loading && <h1 className="masthead-heading text-uppercase mb-0">{profile.profileName}</h1>
              }
            </div>
        }
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          {
            adminLogedIn.login ?
              !editMode ? <CrudButton crudAction='Edit' onClick={handleOnChangeToEditMode} /> : <CrudButton crudAction='update' onClick={handleOnUpdateProfileInfo} />
              : <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          }
          <div className="divider-custom-line"></div>
        </div>
        {
          editMode ?
            <div>
              {
                !loading && <input className="masthead-subheading font-weight-light mb-0 edit-input" id='profileTitle' placeholder='Title' value={formik.values.profileTitle} onChange={formik.handleChange} />
              }
            </div>
            :
            <div>
              {
                !loading && <p className="masthead-subheading font-weight-light mb-0">{profile.profileTitle}</p>
              }
            </div>
        }
      </form>
      <div className="text-center mt-4">
        <a className={adminLogedIn.login ? "btn btn-xl btn-outline-light disabled" : "btn btn-xl btn-outline-light"} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leon-suarez/">
          LinkedIn
        </a>
      </div>
    </header>
  )
}