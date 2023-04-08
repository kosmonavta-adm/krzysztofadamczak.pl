import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
    }
`;
