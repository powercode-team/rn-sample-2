import React, { Component } from 'react';
import { Font } from 'expo';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import theme from './theme'

import { store, persistor } from './store';

import AppNavigator from './navigation';


import { fontImports, fontNames } from './constants/fonts';

class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      [fontNames.Poppins.light]: fontImports.Poppins.light,
      [fontNames.Poppins.regular]: fontImports.Poppins.regular,
      [fontNames.Poppins.medium]: fontImports.Poppins.medium,
      [fontNames.Poppins.semiBold]: fontImports.Poppins.semiBold,
      [fontNames.Poppins.bold]: fontImports.Poppins.bold,

      [fontNames.Viga.regular]: fontImports.Viga.regular,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;

    return fontLoaded ? (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <AppNavigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    ) : null;
  }
}

export default App;
