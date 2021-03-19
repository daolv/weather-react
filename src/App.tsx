import logo from './logo.svg';
import './app.styled.ts';
import Home from './pages/Home';
import React from 'react';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { AppStore } from './store/appStore';
import { GlobalStyles } from './app.styled';

const App: React.FC = () =>  {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
