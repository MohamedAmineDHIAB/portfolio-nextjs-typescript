import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--purple);
    box-sizing: border-box;
    color: white;
    border: 2px solid rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const IconOne = styled.div`
    width: 40%;
    height: 40%;
    border-radius: 50%;
    background-color: white;
    border: inherit;
`;
const IconTwo = styled.div`
    width: 40%;
    height: 40%;
    background-color: white;
    border: inherit;
`;
const IconThree = styled.div`
    width: 30%;
    height: 30%;
    transform: rotateZ(45deg);
    background-color: white;
    border: inherit;
`;
type CircleProps = {
    index: number;
};
const Circle = ({ index }: CircleProps) => {
    return (
        <Wrapper>
            {(() => {
                if (index % 3 == 0) {
                    return <IconOne />;
                } else if (index % 3 == 1) {
                    return <IconTwo />;
                } else {
                    return <IconThree />;
                }
            })()}
        </Wrapper>
    );
};

export default Circle;
