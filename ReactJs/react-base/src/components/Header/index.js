import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  // eslint-disable-next-line
  const buttonDown = useSelector((state) => state.example.buttonDown);

  return (
    <>
      <Nav>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/login">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/assad">
          <FaSignInAlt size={24} />
        </Link>
        {buttonDown ? 'Down' : 'Not Down'}
      </Nav>
    </>
  );
}
