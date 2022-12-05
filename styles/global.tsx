import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Work Sans';
        font-size:2rem;
        --light-purple:#E4E4F2;
        --blue:#113A8F;
        --dark-blue:#1D2840;
        --light-blue:#50D4F2;
        --light-green:#A7F235;
        --pastel-green:#AEFFA5;
        --orange:#F2A172;
        --dark-pink:#BF95A9;
        --purple:#CDBEFA;
        user-select: none;
    }
    h3{
        font-family: 'Alfa Slab One';
        font-weight:light;
        font-size:max(1.2rem,4vw);
        color : var(--blue);
    }
    h4{
        font-size: 0.7rem;
        color: var(--dark-blue);
        font-weight: 300;
    }
    b{
        font-family: 'Caveat Brush';
        font-weight : 900;
        font-size:max(0.9rem,4vw);
        color : var(--dark-blue);
    }
    span{
        font-family: 'Work Sans';
        font-size: 0.5rem;
        font-weight: 300;
    }
    a{
        font-family: 'Work Sans';
        font-size: 0.5rem;
        font-weight: 300;
        color:var(--blue);
    }
    span.soft{
        opacity:0.5;
    }
    span.commit{
        font-family: 'Source Code Pro', monospace;
        font-size: 0.5rem;
        font-weight: 400;
        color:var(--dark-blue);
    }
`;

export const Body = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`;
