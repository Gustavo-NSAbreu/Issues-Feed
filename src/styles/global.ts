import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }
  
  body {
    background: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, h1, h2, h3, h4, h5, h6 {
    font: 400 1rem Nunito, sans-serif;
  }

main {
  width: 100%;
}
`;
