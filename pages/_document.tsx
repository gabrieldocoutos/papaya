import { Footer } from "footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className={"text-gunmetal-600 bg-neutral-100 hide-scrollbar"}>
                <Main />
                <NextScript />
            </body>
            <Footer />
        </Html>
    );
}
