import React, { createContext, useCallback, useContext, useState } from 'react';

interface ISearchContextState {
  search: string;
  addSearch(data: string): void;
}

const SearchContext = createContext<ISearchContextState>(
  {} as ISearchContextState,
);

export const SearchProvider: React.FC = ({ children }) => {
  const [data, setData] = useState('');

  const addSearch = useCallback((search: string) => {
    setData(search);
  }, []);

  return (
    <SearchContext.Provider value={{ search: data, addSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): ISearchContextState => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within an SearchProvider');
  }

  return context;
};
