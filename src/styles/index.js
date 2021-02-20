import { createGlobalStyle } from 'styled-components';

import { MAP_COLORS, FONTS } from './variables';

export const GlobalStyle = createGlobalStyle`

    body, html {
        background: ${MAP_COLORS.background};
        margin: 0;
        font-family: ${FONTS.default}, sans-serif;
        padding: 0;
        font-weight: 400;
    }
`
