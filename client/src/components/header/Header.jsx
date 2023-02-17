import React, { useContext, useState, useEffect } from 'react';

import axios from 'axios';
import { useFormik } from 'formik';
import { CiEdit } from "react-icons/ci";

import { AdminLogedIn } from '../../context/AdminLogedIn';
import { CrudButton } from '../../components/crud-button';
import { Loading } from '../../components/loading';
import { ResumeDropdown } from '../resume-dropdown/ResumeDropdown';

export const Header = () => {
  const adminLogedIn = useContext(AdminLogedIn);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      profileLanguage: 'English',
      profileName: profile.profileName,
      profileTitle: profile.profileTitle
    },
    onSubmit: async values => {
      await axios.put('http://localhost:8080/api/profile/update-profile-info',
        { profileName: values.profileName, profileTitle: values.profileTitle, profileLanguage: values.profileLanguage })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  useEffect(() => {
    const fetchProfileInfo = async () => {
      setLoading(true);
      await axios.post('http://localhost:8080/api/profile/profile-info', { profileLanguage: "English" }).then((response) => {
        setProfile(response.data.profileInfo);
        setTimeout(() => {
          setLoading(false);
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
        setLoading(true);
        await axios.post('http://localhost:8080/api/profile/profile-info', { profileLanguage: "English" }).then((response) => {
          setProfile(response.data.profileInfo);
          setTimeout(() => {
            setLoading(false);
          }, 100);
        }).catch((error) => { console.log(error) })
      };
      fetchProfileInfo();
    }, 3000);
  }

  return (
    <header className="masthead bg-primary text-white text-center" id='page-top'>
      {
        adminLogedIn.login ?
          <form className="container d-flex align-items-center flex-column" onSubmit={formik.handleSubmit}>
            <div className='avatar-wrapper'>
              <img className="masthead-avatar mb-5" src="./leonsuarezavataredited_ccexpress.png" alt="Leon Suarez" />
              <button className='edit-avatar-picture'><CiEdit /></button>
            </div>
            {
              editMode ?
                <div>
                  {
                    <input className="masthead-heading text-uppercase mb-0 edit-input" id='profileName' placeholder={profile.profileName} value={formik.values.profileName} onChange={formik.handleChange} />
                  }
                </div>
                :
                <div>
                  {
                    loading ? <Loading size='small' /> : <h1 className="masthead-heading text-uppercase mb-0">{profile.profileName}</h1>
                  }
                </div>
            }
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              {
                !editMode ? <CrudButton crudAction='Edit' onClick={handleOnChangeToEditMode} /> : <CrudButton crudAction='update' onClick={handleOnUpdateProfileInfo} />
              }
              <div className="divider-custom-line"></div>
            </div>
            {
              editMode ?
                <div>
                  {
                    <input className="masthead-subheading text-capitalized font-weight-light mb-0 edit-input" id='profileTitle' placeholder={profile.profileTitle} value={formik.values.profileTitle} onChange={formik.handleChange} />
                  }
                </div>
                :
                <div>
                  {
                    loading ? <Loading size='small' /> : <p className="masthead-subheading text-capitalized font-weight-light mb-0">{profile.profileTitle}</p>
                  }
                </div>
            }
          </form> :
          <div className="container d-flex align-items-center flex-column">
            <img className="masthead-avatar mb-5" src="./leonsuarezavataredited_ccexpress.png" alt="Leon Suarez" />
            <div>
              {
                !loading && <h1 className="masthead-heading text-uppercase mb-0">{profile.profileName}</h1>
              }
            </div>
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div>
            </div>
            <div>
              {
                !loading && <p className="masthead-subheading font-weight-light mb-0">{profile.profileTitle}</p>
              }
            </div>
          </div>
      }
      <div className="text-center mt-4 buttons-wrapper">
        <a className={adminLogedIn.login ? "btn btn-xl btn-outline-light disabled" : "btn btn-xl btn-outline-light"} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leon-suarez/">
          LinkedIn
        </a>
        <ResumeDropdown name='Leon Suarez' />
      </div>
    </header>
  )
}