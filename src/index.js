import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { ThemeProvider } from '@emotion/react';
import './index.css';

const theme = {
  colors: {
    backgroundColor: '#f0efef',
    sectionBackgroundColor: '#fcffc7',
    buttonBackgroundColor: '#db7093',
    goodButtonHoverColor: '#85ff34',
    neutralButtonHoverColor: '#34ccff',
    badButtonHoverColor: 'red',
  },
  containerBorderRadius: '20px',
  buttonBorderRadius: '5px',
  buttonBorder: '1px solid #bb9665',
  boxShadow: '3px 5px 10px 3px rgba(0, 0, 0, 0.30)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);