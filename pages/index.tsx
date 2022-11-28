import Head from "next/head";
import Education from "../components/education";
import Work from "../components/work";
import Header from "../components/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import { GlobalStyle, Body } from "../styles/global";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Footer from "../components/footer";

const DynamicHeader = dynamic(() => import("../components/header"), {
    suspense: true,
});
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
                <Projects />
                <Education />
                <Work />
                <Footer />
            </Body>
        </>
    );
}
