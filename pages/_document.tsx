import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Josefin+Slab:wght@400;500;600;700&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;800&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,800;1,300;1,400;1,500;1,800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
