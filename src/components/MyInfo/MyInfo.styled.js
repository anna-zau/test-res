import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: block;
  max-width: 500px;
  margin: 0 auto;
`;
export const Link = styled.a`
  color: #1a1a5e;
  padding: 5px;

  transition: all 250ms cubic-bezier(0.07, 0.54, 0.8, 0.53);

  &:hover,
  &:focus {
    color: #9a9ae3;
  }
`;

export const List = styled.ul`
  max-width: 200px;
  margin-top: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 250ms cubic-bezier(0.07, 0.54, 0.8, 0.53);
  &:hover,
  &:focus {
    scale: 1.05;
  }
`;
