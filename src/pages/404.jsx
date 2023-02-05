import { NavLink } from 'react-router-dom';

const NotFround = () => (
  <div style={{ display: 'block', padding: '40px' }}>
    <h1>NOT FOUND</h1>
    <p>Something went wrong, please try to go to the Home Page</p>
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
        borderRadius: '10px',
      }}
    >
      Home Page
    </NavLink>
  </div>
);

export default NotFround;
