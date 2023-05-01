import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;

  font-size: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 150px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px 25px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;

  transition: all 250ms cubic-bezier(0.07, 0.54, 0.8, 0.53);
`;

export const Text = styled.p`
  font-size: 15px;
  text-align: center;
  font-weight: 600;
  font-style: italic;

  margin-top: 15px;
`;

export const Image = styled.img``;
