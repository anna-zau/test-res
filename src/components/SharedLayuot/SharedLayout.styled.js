import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 33px 50px;
    display: flex;
    gap: 60px;
  }

  @media screen and (min-width: 1024px) {
    padding: 35px 60px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 25px;
  background-color: #d5b1e4;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 580px;
  }
`;

export const Logo = styled.p`
  display: block;
  font-family: 'Bitter', serif;
  font-size: 18px;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const MobileMenu = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
