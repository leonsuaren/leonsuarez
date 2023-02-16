import React, { useContext, useState, useEffect } from 'react';

import axios from 'axios';

import { AdminLogedIn } from '../../context/AdminLogedIn';
import { Loading } from '../../components/loading';

export const Navigation = () => {
  const adminLogedIn = useContext(AdminLogedIn);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

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

  const handleOnLoginOut = () => {
    localStorage.removeItem("token");
    adminLogedIn.setLogin(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
      <div className="container">
        {loading ? <Loading size='small' spinnerStyle='light' /> : <a className="navbar-brand" href="#page-top">{`${profile.profileName}`}</a>}
        <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
            {
              adminLogedIn.login && <li className="nav-item mx-0 mx-lg-1"><button className="btn btn-xl btn-outline-light" onClick={handleOnLoginOut}>LogOut</button></li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}