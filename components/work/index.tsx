import Title from "../title";
import Item from "./item";
import { Container, Wrapper } from "./style";
import { firstWorkData } from "../../data/workData/firstWork";
import { secondWorkData } from "../../data/workData/secondWork";
import { thirdWorkData } from "../../data/workData/thirdWork";
import { fourthWorkData } from "../../data/workData/fourthWork";
import { motion } from "framer-motion";
import styled from "styled-components";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.01,
            staggerChildren: 0.4,
        },
    },
};

const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    },
};
const Work = () => {
    return (
        <Wrapper name="work">
            <Title title="Work" />
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <Container>
                    <motion.div variants={item}>
                        <Item index={0} data={firstWorkData} />
                    </motion.div>
                    <motion.div variants={item}>
                        <Item index={1} data={secondWorkData} />
                    </motion.div>
                    <motion.div variants={item}>
                        <Item index={2} data={thirdWorkData} />
                    </motion.div>
                    <motion.div variants={item}>
                        <Item index={3} data={fourthWorkData} />
                    </motion.div>
                    <motion.div variants={item}>
                        <span className="commit">Initial commit 🎉</span>
                    </motion.div>
                </Container>
            </motion.div>
        </Wrapper>
    );
};

export default Work;
