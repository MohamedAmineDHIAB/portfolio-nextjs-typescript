import Degree from "./degree";
import { Wrapper, Waves, Container } from "./style";
import { schoolOneData } from "../../data/educationData/schoolOne";
import { schoolTwoData } from "../../data/educationData/schoolTwo";
import Title from "../title";

const Education = () => {
    return (
        <Wrapper>
            <Title title="Education" />
            <Waves src="./hero/waves.svg" top={true} />
            <Waves src="./hero/waves.svg" top={false} />
            <Container>
                <Degree data={schoolOneData} />
                <Degree data={schoolTwoData} />
            </Container>
        </Wrapper>
    );
};

export default Education;
