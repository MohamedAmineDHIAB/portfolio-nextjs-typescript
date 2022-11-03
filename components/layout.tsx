import React from "react";
import styled from "styled-components";
import SvgLogoMD from "../public/md-logo";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--orange);
`;

const Layout = () => {
    return (
        <Container>
            Mohamed Amine Portfolio
            <SvgLogoMD fill="var(--blue)" />
        </Container>
    );
};

export default Layout;
