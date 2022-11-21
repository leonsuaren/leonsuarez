import React, { useContext, useState, useEffect } from 'react';

import axios from 'axios';

import { AdminLogedIn } from '../../context/AdminLogedIn';
import { CrudButton } from '../../components/crud-button';

export const Header = () => {
  const adminLogedIn = useContext(AdminLogedIn);
  const [loading, setLoadind] = useState(false);
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);

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
    console.log('edit true');
  };

  const handleOnUpdateProfileInfo = () => {
    setEditMode(false);
  }

  return (
    <header className="masthead bg-primary text-white text-center" id='page-top'>
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src="./leonsuarezavataredited_ccexpress.png" alt="Leon Suarez" />
        {
           editMode ?
            <div>
              {
                !loading && <input className="masthead-heading text-uppercase mb-0" placeholder={profile.profileName} />
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
      
             !editMode ? <CrudButton crudAction='Edit' onClick={handleOnChangeToEditMode} /> : <CrudButton crudAction='update' onClick={handleOnUpdateProfileInfo}/>
         
            
            : <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          }
          <div className="divider-custom-line"></div>
        </div>
        {
          editMode ? 
          <div>
            {
              <input className="masthead-subheading font-weight-light mb-0" placeholder={profile.profileTitle}/>
            }
          </div>
          : 
          <div>
            {
              !loading && <p className="masthead-subheading font-weight-light mb-0">{profile.profileTitle}</p>
            }
          </div>
        }
      </div>
      <div className="text-center mt-4">
        <a className={ adminLogedIn.login ? "btn btn-xl btn-outline-light disabled" : "btn btn-xl btn-outline-light"} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leon-suarez/">
          LinkedIn
        </a>
      </div>
    </header>
  )
}