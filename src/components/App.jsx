import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

// import { Home } from '../pages/Home';
// import { AboutMe } from '../pages/AboutMe';
// import { Skills } from '../pages/Skills';
// import { Portfolio } from '../pages/Portfolio';
// import { ContactMe } from '../pages/ContactMe';
import { SharedLayout } from './SharedLayuot/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const AboutMe = lazy(() => import('../pages/AboutMe'));
const Skills = lazy(() => import('../pages/Skills'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const ContactMe = lazy(() => import('../pages/ContactMe'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Route>
      </Routes>
    </>
  );
};
