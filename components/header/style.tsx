import styled from "styled-components";

export const HeaderWrapper = styled.div`
    height: 1.8rem;
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
    > * {
        font-size: 0.5rem;
        font-weight: 300;
    }
    margin-right: 1rem;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
`;
