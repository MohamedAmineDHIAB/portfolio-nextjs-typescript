import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 1.5rem;
    background: url("./main/brush.svg") no-repeat center center;
    background-size: cover;
`;

type TitleProps = {
    title?: string;
};
const Title = ({ title }: TitleProps) => {
    return (
        <Wrapper>
            <h3>{title}</h3>
        </Wrapper>
    );
};

export default Title;
