import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f7f7ff;
    color: #fff;
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font-family: 'Robot Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: #00467b;
    margin: 16px;
    ::after {
        content: "";
        display: block;
        background-color: #EC610C;
        width: 120px;
        height: 4px;
        margin: 8px auto 0;
        border-radius: 4px;
    }
  }

  a {
    color: inherit !important;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  .kelvinLogo {
    background: #f26a36;
  }
`;
