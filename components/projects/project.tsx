import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
`;

const Title = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 0.4rem;
    line-height: 0.8rem;
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
    &:hover {
        background-color: var(--blue);
        color: white;
    }
    transition: all 0.15s cubic-bezier(0.48, 0.04, 0.95, 0.63);
`;

const ImgWrapper = styled.div`
    width: 90%;
    height: 5rem;
    position: relative;
    margin-top: 6%;
`;

type ProjectProps = {
    title?: string;
    link?: string;
    itemData: {
        img: string;
        title: string;
        cols?: number;
        rows?: number;
    }[];
};

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}`,
    };
}
const Project = ({ title, link, itemData }: ProjectProps) => {
    return (
        <Wrapper>
            {/* <b style={{ fontSize: "1rem" }}>{title}</b>
            <span>{description}</span> */}
            <ImgWrapper>
                <ImageList
                    cols={4}
                    rowHeight={80}
                    style={{
                        overflow: "visible",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {itemData.map((item, index) => (
                        <ImageListItem
                            key={index}
                            cols={item.cols || 1}
                            rows={item.rows || 1}
                        >
                            <img
                                {...srcset(item.img, 20, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    objectFit: "cover",
                                    border: "1px solid rgba(0, 0, 0, 0.5)",
                                    borderRadius: "10px",
                                }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </ImgWrapper>
            <Title>
                <h3
                    style={{
                        fontSize: "0.5rem",
                        color: "var(--blue)",
                        letterSpacing: "0.03rem",
                    }}
                >
                    {title}
                </h3>
            </Title>
            <Button href={link}>
                Link to GitHub
                <IoLogoGithub style={{ fontSize: "inherit" }} />
                <FiExternalLink style={{ fontSize: "inherit" }} />
            </Button>
        </Wrapper>
    );
};

export default Project;
