import React from 'react';

import { SearchProvider } from './search';

export const AppProvider: React.FC = ({ children }) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default AppProvider;
