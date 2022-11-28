import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 2rem;
    background-color: white;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const Footer = () => {
    return (
        <Wrapper>
            <Wrapper>
                <span>
                    &#9400; Mohamed Amine DHIAB 2022. Images source:{" "}
                    <a href="freepik.com"> freepik.com</a>
                </span>
            </Wrapper>
        </Wrapper>
    );
};

export default Footer;
