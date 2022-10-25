import { createGlobalStyle } from 'styled-components';
import { stackColor } from './colors';


export const GlobalStyle = createGlobalStyle`
html{
    font-size: 16px;
    margin: 0;
}

*{
    color: ${stackColor.white};
}
body{
    background: #1B1B1B;
    overflow: hidden;
    height: 100vh;
    font-family: 'Roboto', 'sans-serif';
}
a,p{
    color: ${stackColor.white};
    font-size:1rem;
}
`