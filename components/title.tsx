import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
    margin-bottom: 1.5rem;
    background: url("./main/brush.svg") no-repeat center center;
    background-size: cover;
`;
const Container = styled(motion.div)`
    display: flex;
`;
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1,
        },
    },
};
const characterAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};
type TitleProps = {
    title: string;
};
const Title = ({ title }: TitleProps) => {
    return (
        <Wrapper>
            <Container
                variants={container}
                initial="hidden"
                whileInView="visible"
            >
                {title.split("").map((character, index) => {
                    return (
                        <motion.div variants={characterAnimation} key={index}>
                            <h3>{character}</h3>
                        </motion.div>
                    );
                })}
            </Container>
        </Wrapper>
    );
};

export default Title;
