import Head from "next/head";
import Layout from "../components/layout";
import { GlobalStyle } from "../styles/global";
export default function Home() {
    return (
        <>
            <Head>
                <title>Mohamed Dhiab Portfolio</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Josefin+Slab:wght@400;500;600;700&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <GlobalStyle />
            <Layout />
        </>
    );
}
