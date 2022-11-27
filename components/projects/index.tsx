import { Container, Wrapper } from "./style";
import Project from "./project";
import { ProjectGusaData } from "../../data/projectsData/projectGusa";
import { ProjectPortfolio } from "../../data/projectsData/projectPortfolio";
import { ProjectImageText } from "../../data/projectsData/projectImageText";
import { ProjectCoraGNN } from "../../data/projectsData/projectCoraGNN";

const Projects = () => {
    return (
        <Wrapper>
            <h3>Projects</h3>
            <Container>
                <Project
                    title="Guided Soft-Attention Netwrok"
                    link="https://github.com/MohamedAmineDHIAB/guided_self-attention_for_vision_transformer"
                    itemData={ProjectGusaData}
                />
                <Project
                    title="Next.js and TypeScript Portfolio"
                    link="https://github.com/MohamedAmineDHIAB/portfolio-nextjs-typescript"
                    itemData={ProjectPortfolio}
                />
                <Project
                    title="Image-Text Matching"
                    link="https://github.com/MohamedAmineDHIAB/Image-Text-Matching_using_CNN-Doc2Vec-TFIDF"
                    itemData={ProjectImageText}
                />
                <Project
                    title="Cora Classification using GNNs"
                    link="https://github.com/MohamedAmineDHIAB/Cora_Classification_using_GNN"
                    itemData={ProjectCoraGNN}
                />
            </Container>
        </Wrapper>
    );
};

export default Projects;
