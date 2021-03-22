import { createGlobalStyle } from 'styled-components';

import { MAP_COLORS, FONTS } from './variables';

export const GlobalStyle = createGlobalStyle`

    body, html {
        background: ${MAP_COLORS.background};
        margin: 0;
        font-family: ${FONTS.default}, sans-serif !important;
        padding: 0;
        font-weight: 400;
        padding-top: 40px;
        @media (max-width: 500px) {
            padding-left: 10px;
            padding-right: 10px;
            h1 {
                font-size: 1.7rem;
            }
        } 
    }
    .events-bt {
        display: flex;
        button {
            margin: 0 5px;
        }
    }
    .btn {
        .material-icons {
            position: relative;
            top: 5px;
            margin: 0 5px;
        }
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
        height: 50px;
        font-weight: bold;
        background-color: #fff;
        width: 100%;
        font-size: 14px;
        font-family: ${FONTS.default}, sans-serif;
        padding: 0 15px;
        box-sizing: border-box;
        outline: none;
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
            background-color: #ececec;
            padding: 15px;
            border-bottom: 1px solid #e6e6e6;
            &:last-child {
                border-bottom: 0;
            }
            h5 {
                margin: 0;
            }
        }
    }
`
