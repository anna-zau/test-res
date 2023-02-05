import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayuot/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const AboutMe = lazy(() => import('../pages/AboutMe'));
const Skills = lazy(() => import('../pages/Skills'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const ContactMe = lazy(() => import('../pages/ContactMe'));
const NotFround = lazy(() => import('../pages/404'));

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
          <Route path="*" element={<NotFround />} />
        </Route>
      </Routes>
    </>
  );
};
