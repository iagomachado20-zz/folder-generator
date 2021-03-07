import { createGlobalStyle } from 'styled-components';

import { MAP_COLORS, FONTS } from './variables';

export const GlobalStyle = createGlobalStyle`

    body, html {
        background: ${MAP_COLORS.background};
        margin: 0;
        font-family: ${FONTS.default}, sans-serif;
        padding: 0;
        font-weight: 400;
        padding-top: 40px;
    }
    .toast {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 4000;
    }
    .react-autosuggest__container {
        width: 100%;
        position: relative;
    }
    .react-autosuggest__input {
        height: 65px;
        font-weight: bold;
        background-color: #fff;
        width: 100%;
        font-family: ${FONTS.default}, sans-serif;
        padding: 0 25px;
        box-sizing: border-box;
        background: ${MAP_COLORS.background};
        outline: none;
        border-radius: 30px;
        border: 1px solid #ccc;
    }
    .react-autosuggest__suggestions-container {
        position: absolute;
        top: 100%;
        z-index: 30;
        width: 100%;
    }
    .react-autosuggest__suggestions-list {
        padding: 0;
        list-style: none;
        li {
            background-color: ${MAP_COLORS.background};
            padding: 15px;
            border-bottom: 1px solid #e6e6e6;
            &:last-child {
                border-bottom: 0;
            }
        }
    }
`
