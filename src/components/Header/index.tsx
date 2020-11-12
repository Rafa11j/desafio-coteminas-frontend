import React from 'react';
import InputSearch from '../InputSearch';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h2>Desafio Coteminas</h2>
      <InputSearch />
    </Container>
  );
};

export default Header;
