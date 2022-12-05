import { Element } from "react-scroll";
import styled from "styled-components";

export const Wrapper = styled(Element)`
    min-height: 110vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    box-sizing: border-box;
    padding: 2rem 0;
    background: url("/work/background.webp") no-repeat center center;
    background-size: contain;
    @media screen and (max-width: 768px) {
        background: linear-gradient(white 10%, rgba(0, 0, 0, 0.2) 200%);
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    position: relative;
`;
