import React from 'react';
import ReactNotification from 'react-notifications-component';
import Header from './components/Header';
import AppProvider from './hooks';

import GlobalStyles from './styles/global';
import 'react-notifications-component/dist/theme.css';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <AppProvider>
      <ReactNotification />
      <Header />
      <Home />
      <GlobalStyles />
    </AppProvider>
  );
};

export default App;
