import { NavLink } from 'react-router-dom';

import { Container, Section, Text } from '../styles/common.styled';

const NotFround = () => (
  <Section>
    <Container>
      <h1>NOT FOUND</h1>
      <Text>Something went wrong, please try to go to the Home Page</Text>
      <NavLink
        to="/"
        style={{
          display: 'block',
          textDecoration: 'none',
          color: '#551A8B',
          padding: '5px',
          textAlign: 'center',
          border: '1px solid #551A8B',
          width: '100px',
          marginTop: '15px',
        }}
      >
        Home Page
      </NavLink>
    </Container>
  </Section>
);

export default NotFround;
