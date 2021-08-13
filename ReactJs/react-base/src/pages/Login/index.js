import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

import axios from '../../services/axios';

export default function Login() {
  return (
    <Container>
      <Title>
        Template
        <small>Login Page</small>
      </Title>
      <p>Lorem ipsum dolor sit amet</p>
    </Container>
  );
}
