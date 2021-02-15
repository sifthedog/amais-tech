import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import GlobalStyle from './styles/global';
import Main from './pages/Main';

const App: React.FC = () => (
  <>
    <Main />
    <GlobalStyle />
  </>
);

export default App;
