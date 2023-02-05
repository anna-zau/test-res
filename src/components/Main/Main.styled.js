import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperHero = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Wrapper = styled.div`
  width: 600px;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
`;

export const Text = styled.p`
  font-size: 30px;

  font-weight: 600;
  font-style: italic;
  margin-top: 15px;
`;

export const TextAccent = styled.span`
  color: #551a8b;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px;

  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  color: #551a8b;

  border: 1px solid #551a8b;
  background-color: transparent;

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.07, 0.54, 0.8, 0.53);

  &:hover,
  &:focus {
    background-color: #9a9ae3;
    color: white;
    border: 0;
  }
`;

export const Title = styled.h2`
  margin-top: 15px;
`;

export const ImageWrapper = styled.div`
  max-width: 600px;
`;

export const Image = styled.img`
  width: 600px;
`;

export const LinkCv = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const LinkContacts = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
