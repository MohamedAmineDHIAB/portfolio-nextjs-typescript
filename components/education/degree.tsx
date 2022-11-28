import styled from "styled-components";
const Wrapper = styled.div`
    width: 11rem;
    height: 7rem;
    border-radius: 0.1rem;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    background-color: white;
`;

const Title = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 0.5rem;
    line-height: 0.8rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 2.2rem;
    text-align: left;
`;
const Logo = styled.img`
    width: 3rem;
    height: 2rem;
    object-fit: contain;
    box-sizing: border-box;
    padding: 0.4rem;
`;
const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 0.2rem 0.2rem 0.2rem 0.9rem;
`;

type DegreeProps = {
    data: {
        logo: string;
        name: string;
        location: string;
        period: string;
        diploma: string;
        modules: string;
        results: string;
    };
};
const Degree = ({ data }: DegreeProps) => {
    return (
        <Wrapper>
            <Title>
                <Logo src={data.logo} />
                <h4
                    style={{
                        width: "65%",
                    }}
                >
                    {data.name}
                </h4>
            </Title>
            <BottomSection>
                <span className="soft">{data.location}</span>
                <span className="soft">{data.period}</span>
                <span style={{ color: "var(--blue)" }}>
                    Modules:{" "}
                    <span style={{ color: "black", fontSize: "0.4rem" }}>
                        {data.modules}
                    </span>
                </span>
                <b style={{ color: "var(--blue)", fontSize: "0.7rem" }}>
                    {data.diploma}
                </b>
            </BottomSection>
        </Wrapper>
    );
};

export default Degree;
