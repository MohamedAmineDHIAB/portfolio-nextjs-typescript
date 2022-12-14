import styled from "styled-components";
import { Element } from "react-scroll";
interface Props {
    top: boolean;
}
export const Waves = styled.img<Props>`
    transform: ${(p) => (p.top ? "none" : "scaleY(-1)")};
    position: absolute;
    top: ${(p) => (p.top ? "0" : "none")};
    bottom: ${(p) => (p.top ? "none" : "0")};
    left: 0;
    width: 100%;
`;
export const Wrapper = styled(Element)`
    min-height: 110vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    flex-direction: column;
    background: url("./education/freepik_rawpixel.svg") no-repeat center center;
    background-size: cover;
    box-sizing: border-box;
    padding: 2rem 0;
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
