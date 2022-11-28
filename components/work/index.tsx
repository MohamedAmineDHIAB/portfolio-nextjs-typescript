import Title from "../title";
import Item from "./item";
import { Container, Wrapper } from "./style";

const Work = () => {
    return (
        <Wrapper>
            <Title title="Work" />
            <Container>
                <Item index={0}/>
                <Item index={1}/>
                <Item index={2}/>
                <Item index={3}/>
            </Container>
        </Wrapper>
    );
};

export default Work;
