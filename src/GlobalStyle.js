import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #272727;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
  }
  html{
    font-size: 10px;
    
    color: white;
    background-color: #272727;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .loader{
    text-align: center;
    background-color: var(--dark-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      z-index: 101;
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: yellow;
      }
    }
  }
`;
export default GlobalStyles;