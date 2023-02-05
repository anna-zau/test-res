import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 25px 35px;
  width: 1200px;
`;

export const Logo = styled.p`
  display: block;
  width: 300px;
  margin-right: 10px;
  padding: 10px;

  font-weight: 600;
  font-size: 18px;

  font-style: italic;

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
  font-weight: 500;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 15px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Navlink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  transition: all 250ms cubic-bezier(0.07, 0.54, 0.8, 0.53);

  &:active,
  &:hover,
  &:focus,
  &.active {
    background-color: #9a9ae3;
    color: white;
    border: 0;
  }
`;
