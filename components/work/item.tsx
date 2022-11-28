import styled from "styled-components";
import Circle from "./circle";
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
    border-left: 2px solid rgba(0, 0, 0, 0.9);
    position: relative;
`;

type ItemProps = {
    index: number;
};
const Item = ({ index }: ItemProps) => {
    return (
        <Wrapper>
            <Circle index={index} />
            Item Item
            <div>Item</div>
        </Wrapper>
    );
};

export default Item;
