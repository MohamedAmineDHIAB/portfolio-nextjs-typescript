import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import { GlobalStyle, Body } from "../styles/global";

export default function Home() {
    return (
        <>
            <Head>
                <title>Mohamed Dhiab</title>
                <meta
                    name="Portfolio of Mohamed Dhiab"
                    content="Mohamed Amine Dhiab is a Software Engineer with double Computer Science Master degrees from Centrale Marseille and Technical University of Berlin and strong professional as well as theoratical knowledge in the field of software development."
                />
            </Head>
            <Body>
                <GlobalStyle />
                <Header />
                <Hero />
            </Body>
        </>
    );
}
