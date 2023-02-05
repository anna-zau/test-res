import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Container } from 'styles/common.styled';

import {
  Header,
  Logo,
  Navigation,
  MobileMenu,
  Navlink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo>&#60; Anna-Mattveys &#47; &#62;</Logo>
          <MobileMenu>
            <button>
              <FiMenu />
            </button>
          </MobileMenu>

          <Navigation>
            <Navlink to="/">Home Page</Navlink>
            <Navlink to="/about-me">About Me</Navlink>
            <Navlink to="/skills">Skills</Navlink>
            <Navlink to="/portfolio">Portfolio</Navlink>
            <Navlink to="/contact-me">Contact Me</Navlink>
          </Navigation>
        </Header>
      </Container>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
