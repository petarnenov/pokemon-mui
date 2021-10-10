import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@mui/material/styles';
import { BaseTheme } from './themes/BaseTheme';
import { CssBaseline } from '@mui/material';
import Layout from './UI/Layout';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={BaseTheme}>
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <App />
          </Layout>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
