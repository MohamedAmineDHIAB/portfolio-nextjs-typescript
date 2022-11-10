import Head from "next/head";
import Hero from "../components/hero";
import { GlobalStyle, Body } from "../styles/global";
export default function Home() {
    return (
        <>
            <Head>
                <title>Mohamed Dhiab</title>
                <meta
                    name="Portfolio of Mohamed Dhiab"
                    content="Mohamed Amine Dhiab is a Software Engineer with double Master degrees from Centrale Marseille and Technical University of Berlin and strong professional as well as theoratical knowledge in the field of software development."
                />
            </Head>
            <Body>
                <GlobalStyle />
                <Hero />
            </Body>
        </>
    );
}
