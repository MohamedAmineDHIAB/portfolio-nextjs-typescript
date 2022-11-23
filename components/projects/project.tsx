import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
const Wrapper = styled.div`
    width: 8rem;
    height: 10rem;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #333333;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const Title = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 0.1rem;
    line-height: 0.5rem;
    text-align: center;
`;

const Button = styled.a`
    text-declaration: none;
    width: 90%;
    height: 1.2rem;
    background-color: var(--purple);
    border-radius: 1rem;
    margin-bottom: 0.6rem;
    font-size: 0.5rem;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    font-weight: 300;
    > * {
        margin-left: 0.2rem;
    }
`;

const ImgWrapper = styled.div`
    width: 100%;
    height: 5rem;
`;

type ProjectProps = {
    title?: string;
    link?: string;
};
const Project = ({ title, link }: ProjectProps) => {
    return (
        <Wrapper>
            {/* <b style={{ fontSize: "1rem" }}>{title}</b>
            <span>{description}</span> */}
            <ImgWrapper></ImgWrapper>
            <Title>
                <span style={{ fontSize: "0.6rem", fontWeight: "400" }}>
                    {title}
                </span>
            </Title>
            <Button href={link}>
                Link to GitHub
                <IoLogoGithub style={{ fontSize: "inherit" }} />
            </Button>
        </Wrapper>
    );
};

export default Project;
