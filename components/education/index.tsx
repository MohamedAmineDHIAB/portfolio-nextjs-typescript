import Degree from "./degree";
import { Wrapper, Waves, Container } from "./style";
import { schoolOneData } from "../../data/educationData/schoolOne";
import { schoolTwoData } from "../../data/educationData/schoolTwo";
import Title from "../title";
import { motion } from "framer-motion";
const degreeOne = {
    hidden: { x: -100, y: -100, opacity: 0, rotate: -90 },
    visible: {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 1,
        },
    },
};
const degreeTwo = {
    hidden: { x: 100, y: -100, opacity: 0, rotate: 90 },
    visible: {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 1,
        },
    },
};
const Education = () => {
    return (
        <Wrapper name="education">
            <Title title="Education" />
            <Waves src="./hero/waves.svg" top={true} />
            <Waves src="./hero/waves.svg" top={false} />
            <Container>
                <motion.div
                    variants={degreeOne}
                    initial="hidden"
                    whileInView="visible"
                >
                    <Degree data={schoolOneData} />
                </motion.div>
                <motion.div
                    variants={degreeTwo}
                    initial="hidden"
                    whileInView="visible"
                >
                    <Degree data={schoolTwoData} />
                </motion.div>
            </Container>
        </Wrapper>
    );
};

export default Education;
