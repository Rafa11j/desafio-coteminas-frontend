import React, { KeyboardEvent, useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSearch } from '../../hooks/search';
import { Container, Input, ClearIcon } from './styles';

const InputSearch: React.FC = () => {
  const { addSearch } = useSearch();
  const [search, setSearch] = useState('');

  const onSearch = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        addSearch(search);
      }
    },
    [search, addSearch],
  );

  const clearInput = useCallback(() => {
    setSearch('');
    addSearch('');
  }, [addSearch]);

  return (
    <Container>
      <FaSearch />
      <Input
        type="text"
        placeholder="Lençol avulso"
        onKeyPress={onSearch}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ClearIcon onClick={clearInput} />
    </Container>
  );
};

export default InputSearch;
