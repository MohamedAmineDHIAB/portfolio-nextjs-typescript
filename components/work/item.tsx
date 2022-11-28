import styled from "styled-components";
import Card from "./card";
import Circle from "./circle";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
    border-left: 2px solid rgba(0, 0, 0, 0.9);
    position: relative;
    box-sizing: border-box;
    padding: 0 0 1rem 1.2rem;
    @media screen and (max-width: 768px) {
        border: none;
        padding: 0 0 1rem 0;
    }
`;

type ItemProps = {
    index: number;
    data: {
        title: string;
        logo: string;
        period: string;
        stack: string[];
        type: string;
    };
};
const Item = ({ index, data }: ItemProps) => {
    return (
        <Wrapper>
            <Circle index={index} />
            <Card data={data} />
        </Wrapper>
    );
};

export default Item;
