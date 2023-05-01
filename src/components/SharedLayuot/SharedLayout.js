import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { FiMenu } from 'react-icons/fi';

import { Rings } from 'react-loader-spinner';
import { Container } from 'styles/common.styled';

import {
  Header,
  Logo,
  Navigation,
  MobileMenu,
  Navlink,
  Wrapper,
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
      <Suspense
        fallback={
          <Container>
            <Wrapper>
              <Rings
                height="200"
                width="200"
                color="#9a9ae3"
                radius="6"
                wrapperStyle={{}}
                visible={true}
                ariaLabel="rings-loading"
              />
            </Wrapper>
          </Container>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
