import styled from "styled-components";

export const HeaderWrapper = styled.div`
    height: max(1.8rem, 4vw);
    width: 100vw;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15%;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    z-index: 999;
`;

export const LogoWrapper = styled.div`
    height: 70%;
`;

export const NavBar = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const NavBarItem = styled.div`
    display: flex;
    height: 1.1rem;
    align-items: center;
    position: relative;
    > * {
        font-size: max(0.5rem, 1.1vw);
        font-weight: 300;
    }
    margin-right: 1rem;
    cursor: pointer;
    &:after {
        width: 0;
        background: black;
        height: 1px;
        content: "";
        position: absolute;
        bottom: 0;
        transition: all 0.2s ease-in-out;
    }
    &:hover {
        &:after {
            width: 100%;
            background: var(--blue);
            height: 1px;
            content: "";
            position: absolute;
            bottom: 0;
        }
        color: var(--blue);
    }
    &:last-child {
        margin-right: 0;
        &:after {
            all: unset;
        }
        &:hover {
            all: unset;
        }
    }
    transition: all 0.2s ease-in-out;
`;
