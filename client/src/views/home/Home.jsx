import React, { useContext } from 'react';

import { AdminLogedIn } from '../../context/AdminLogedIn';

import { Navigation } from '../../components/navigation';
import { Header } from '../../components/header';
import { Portfolio } from '../../components/portfolio';
import { About } from '../../components/about';
import { Contact } from '../../components/contact';
import { Footer } from '../../components/footer';

export const Home = () => {
  const adminLogedIn = useContext(AdminLogedIn);

  return (
    <div>
      <Navigation />
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}