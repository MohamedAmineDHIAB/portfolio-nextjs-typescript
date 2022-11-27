import Degree from "./degree";
import { Wrapper, Waves, Container } from "./style";
import { schoolOneData } from "../../data/educationData/schoolOne";
import { schoolTwoData } from "../../data/educationData/schoolTwo";

const Education = () => {
    return (
        <Wrapper>
            <h3
                style={{
                    color: "var(--purple)",
                    textShadow: "2px 2px 10px black",
                    marginBottom: "1.5rem",
                }}
            >
                Education
            </h3>
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
