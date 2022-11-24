import styled from "styled-components";

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15%;
    box-sizing: border-box;
`;

export const HeroRight = styled.div`
    border-radius: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden;
     */
`;

export const RightBorder = styled.div`
    width: max(3.5rem, 10vw);
    height: max(3.5rem, 10vw);
    border-radius: 100%;
    margin: 1.5rem;
    position: absolute;
    border: 1px solid #333333;
`;

export const HeroImgWrapper = styled.div`
    width: max(5rem, 15vw);
    height: max(5rem, 15vw);
    border-radius: inherit;
    position: relative;
    overflow: hidden;
    border: 1px solid #333333;
`;

export const HeroLeft = styled.div`
    max-width: 45vw;
    > * {
        margin-top: 1rem;
    }
`;
