import styled from "styled-components";
import { Element } from "react-scroll";
export const Wrapper = styled(Element)`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url("./projects/freepik_kjpargeter.webp") no-repeat center
        center;
    background-size: auto 100%;
    box-sizing: border-box;
    padding: 2rem 0 2rem 0;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: min(5vw, 1rem) min(5vw, 1.5rem);
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
