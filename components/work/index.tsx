import Title from "../title";
import Item from "./item";
import { Container, Wrapper } from "./style";
import { firstWorkData } from "../../data/workData/firstWork";
import { secondWorkData } from "../../data/workData/secondWork";
import { thirdWorkData } from "../../data/workData/thirdWork";
import { fourthWorkData } from "../../data/workData/fourthWork";

const Work = () => {
    return (
        <Wrapper>
            <Title title="Work" />
            <Container>
                <Item index={0} data={firstWorkData} />
                <Item index={1} data={secondWorkData} />
                <Item index={2} data={thirdWorkData} />
                <Item index={2} data={fourthWorkData} />
            </Container>
        </Wrapper>
    );
};

export default Work;
