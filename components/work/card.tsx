import styled from "styled-components";
import { MdUnfoldMore } from "react-icons/md";
import { useState } from "react";
const Wrapper = styled.div`
    width: 11rem;
    border-radius: 0.2rem;
    margin-top: -2rem;
    margin-bottom: 2rem;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    border: 2px solid rgba(0, 0, 0, 0.9);
    background-color: white;
    overflow: visible;
    box-sizing: border-box;
    padding: 0.5rem 0.3rem;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    transition: all 0.2s ease-in-out;
`;
const Triangle = styled.div`
    position: absolute;
    top: calc(0% + 1.7rem);
    left: -0.33rem;
    width: 0.6rem;
    height: 0.6rem;
    transform: rotateZ(45deg);
    background-color: white;
    border: inherit;
    border:border: 2px solid rgba(0, 0, 0, 0.9);
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const Title = styled.div`
    position: relative;

    line-height: 0.8rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    text-align: left;
`;
const LogoWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 1.5rem;
    width: 3rem;
`;
const Logo = styled.img`
    object-fit: contain;
    height: 1.5rem;
    border-radius: 0.15rem;
    box-sizing: border-box;
`;
const More = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
`;
const ShowMore = styled.div`
    display: flex;
    width: 100%;
    height: 1rem;
    justify-content: flex-end;
`;
interface Props {
    showMore: boolean;
}
const Stacks = styled.div<Props>`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    line-height: 1.8rem;
    height: ${(p) => (p.showMore ? "4rem" : "0")};
    transition: all 0.25s ease-in-out;
    overflow: hidden;
`;
const Stack = styled.img`
    height: 1rem;
    margin-right: 0.25rem;
`;
const MoreIcon = styled(MdUnfoldMore)`
    height: 100%;
    width: 0.75rem;
    &:hover {
        color: var(--blue);
    }
`;
type CardProps = {
    data: {
        title: string;
        logo: string;
        period: string;
        stack: string[];
        type: string;
    };
};
const Card = ({ data }: CardProps) => {
    const [showMore, setShowMore] = useState(false);
    const handleClick = () => {
        setShowMore(!showMore);
    };
    console.log(showMore);
    return (
        <Wrapper onClick={handleClick}>
            <Triangle />
            <Title>
                <h4
                    style={{
                        width: "65%",
                    }}
                >
                    {data.title}
                </h4>
                <LogoWrapper>
                    <Logo src={data.logo} />
                </LogoWrapper>
            </Title>
            <span className="soft">{data.type}</span>
            <span className="soft">{data.period}</span>

            <More>
                <Stacks showMore={showMore}>
                    <span>Stack :</span>
                    {data.stack.map((item, index) => {
                        return <Stack key={index} src={`/stacks/${item}`} />;
                    })}
                </Stacks>

                <ShowMore>
                    <MoreIcon />
                </ShowMore>
            </More>
        </Wrapper>
    );
};

export default Card;
