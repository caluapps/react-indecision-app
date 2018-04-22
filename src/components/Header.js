import React from 'react';

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {
      props.subtitle && <h2>{props.subtitle}</h2>
    }
    <p>This is from Header</p>
  </div>
);

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
