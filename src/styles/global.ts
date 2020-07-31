import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  *{
    padding:0;
    margin:0;
    outline:0;
    box-sizing:border-box;
  }
  body{
    background:#F0F0F5 url(${githubBackground}) 70% top no-repeat;
    -webkit-font-smoothing: antialiased;
  }
  body,input,button{
    font:16px Roboto, sans-serif;
  }
  #root{
    max-width:960px;
    padding:40px 20px;
    margin:0 auto;
  }
  button{
    cursor:pointer;
  }
`;
