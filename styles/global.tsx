import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Alfa Slab One';
        font-size:40px;
        --light-violet:#E4E4F2;
        --blue:#113A8C;
        --dark-blue:#1D2840;
        --orange:#F2A172;
        --dark-pink:#BF95A9;
    }
`;

export const Body = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`;
