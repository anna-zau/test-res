import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1028px) {
    max-width: 1280px;

    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const Text = styled.p`
  margin-top: 10px;

  font-size: 15px;
  line-height: 1.5;
`;

export const Button = styled.button`
  margin-top: 15px;
`;
