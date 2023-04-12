import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        min-height: 100vh;
    }
`;
