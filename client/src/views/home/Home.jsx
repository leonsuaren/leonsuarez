import React from 'react';

import { Navigation } from '../../components/navigation';
import { Header } from '../../components/header';
import { Portfolio } from '../../components/portfolio';
import { About } from '../../components/about';
import { Contact } from '../../components/contact';
import { Footer } from '../../components/footer';

export const Home = () => {
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