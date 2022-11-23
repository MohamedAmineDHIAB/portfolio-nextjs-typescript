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
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden;
     */
`;

export const RightBorder = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    margin: 1.5rem;
    position: absolute;
    border: 1px solid #333333;
`;

export const HeroImgWrapper = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: inherit;
    position: relative;
    overflow: hidden;
    border: 1px solid #333333;
`;

export const HeroLeft = styled.div`
    max-width: 18rem;
`;
