import styled from 'styled-components';
import { theme } from '../theme/theme';

export const List = styled.ul`
  display: grid;
  /* -webkit-box-align: center; */
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 20px;
`;

export const Box = styled.div`
  display: block;
  width: 400px;
  height: 200px;
  padding: 20px 20px 10px 20px;
  background-color: ${theme.colors.veryLightPurple};

  transition: ${theme.transition.main};

  box-shadow: ${theme.boxShadow.main};

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const Title = styled.h3`
  font-size: ${theme.fontSize.l};
  margin-bottom: 15px;
`;

export const Description = styled.p`
  display: block;
  text-align: justify;
  font-size: ${theme.fontSize.s};
  margin-bottom: 20px;
  min-height: 50px;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-content: center;
  color: ${theme.colors.darkBlue};
  font-weight: ${theme.fontWeight.semiBold};
  width: 120px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  cursor: pointer;

  font-size: ${theme.fontSize.s};
  padding: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const Tech = styled.p`
  text-align: end;
  font-size: ${theme.fontSize.s};
  margin-top: 20px;
  color: ${theme.colors.grey};
`;
