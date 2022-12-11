import { Container, Wrapper } from "./style";
import Project from "./project";
import { ProjectGusaData } from "../../data/projectsData/projectGusa";
import { ProjectPortfolio } from "../../data/projectsData/projectPortfolio";
import { ProjectImageText } from "../../data/projectsData/projectImageText";
import { ProjectCoraGNN } from "../../data/projectsData/projectCoraGNN";
import Title from "../title";
import { motion } from "framer-motion";
import { ProjectLislupMain } from "../../data/projectsData/projectLislupMain";
import { ProjectDashboard } from "../../data/projectsData/projectDashboard";

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
const Projects = () => {
    return (
        <Wrapper name="projects">
            <Title title="Projects" />
            <motion.ul
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <Container>
                    <motion.li variants={item}>
                        <Project
                            title="LISL UP Main Website"
                            link="https://lislup.com"
                            itemData={ProjectLislupMain}
                            buttonText={<>Link to Main Website</>}
                        />
                    </motion.li>
                    <motion.li variants={item}>
                        <Project
                            title="LISL UP Dashboard"
                            link="https://photos.app.goo.gl/wBYtLnm11bgLeoWa6"
                            itemData={ProjectDashboard}
                            buttonText={<>Link to Demo</>}
                        />
                    </motion.li>
                    <motion.li variants={item}>
                        <Project
                            title="Guided Soft-Attention Netwrok"
                            link="https://github.com/MohamedAmineDHIAB/guided_self-attention_for_vision_transformer"
                            itemData={ProjectGusaData}
                        />
                    </motion.li>
                    <motion.li variants={item}>
                        <Project
                            title="Next.js and TypeScript Portfolio"
                            link="https://github.com/MohamedAmineDHIAB/portfolio-nextjs-typescript"
                            itemData={ProjectPortfolio}
                        />
                    </motion.li>
                    <motion.li variants={item}>
                        <Project
                            title="Image-Text Matching"
                            link="https://github.com/MohamedAmineDHIAB/Image-Text-Matching_using_CNN-Doc2Vec-TFIDF"
                            itemData={ProjectImageText}
                        />
                    </motion.li>
                    <motion.li variants={item}>
                        <Project
                            title="Cora Classification using GNNs"
                            link="https://github.com/MohamedAmineDHIAB/Cora_Classification_using_GNN"
                            itemData={ProjectCoraGNN}
                        />
                    </motion.li>
                </Container>
            </motion.ul>
        </Wrapper>
    );
};

export default Projects;
