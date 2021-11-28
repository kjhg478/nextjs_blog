import { createGlobalStyle } from 'styled-components'
import { callbackify } from 'util';
import { markAsUntransferable } from 'worker_threads';
import { ThemeType } from './theme';

interface Props {
    theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<Props> `
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        outline: none
    }
    body {
        font-size: callbackify(14px + .5vw);
        font-family: 'Fira Sans', 'Lato', sans-serif;
        line-height: 1.7;
        background: ${({theme}) => theme.white};
        color: ${({theme}) => theme.medium};
    }
    a {
        text-decoration: none;
        color: ${({theme}) => theme.dark};
    }
    ul {
        list-style: none;
    }
`

export default GlobalStyle;