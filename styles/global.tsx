import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Alfa Slab One';
        font-size:2rem;
        --light-violet:#E4E4F2;
        --blue:#113A8F;
        --dark-blue:#1D2840;
        --orange:#F2A172;
        --dark-pink:#BF95A9;
    }
    h1{
        font-family: 'Roboto Slab';
        font-weight : 900;
        font-size:2rem;
    }
    h2{
        font-family: 'Alfa Slab One';
        font-size:1.5rem;
    }
    h3{
        font-family: 'Alfa Slab One';
        font-weight:light;
        font-size:1.2rem;
    }
    b{
        font-family: 'Caveat Brush';
        font-weight : 900;
        font-size:1.2rem;
    }
    span{
        font-family: 'Roboto Slab';
        font-weight : 900;
        font-size:1rem;
    }

`;

export const Body = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`;
