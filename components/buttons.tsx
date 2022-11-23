import styled from "styled-components";

export const PrimaryButton = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    height: 1.1rem;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(141, 255, 139, 1) 80%,
        rgba(167, 242, 53, 1) 200%
    );

    padding: 0.5rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    font-size: 0.45rem;
    font-weight: 400;
    width: fit-content;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
    transition: all 0.2s ease-in-out;
`;
