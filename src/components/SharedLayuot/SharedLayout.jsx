import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { FiMenu } from 'react-icons/fi';

import {
  Container,
  Header,
  Logo,
  Navigation,
  MobileMenu,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>Anna-Mattveys</Logo>
        <MobileMenu>
          <button>
            <FiMenu />
          </button>
        </MobileMenu>

        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-me">About Me</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/portfolio">My portfolio</NavLink>
          <NavLink to="/contact-me">Contact Me</NavLink>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
