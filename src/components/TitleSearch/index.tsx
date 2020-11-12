import React from 'react';
import { useSearch } from '../../hooks/search';

import { Container } from './styles';

const TitleSearch: React.FC = () => {
  const { search } = useSearch();
  return (
    <Container>
      <span>{search || 'Lista de produtos'}</span>
    </Container>
  );
};

export default TitleSearch;
