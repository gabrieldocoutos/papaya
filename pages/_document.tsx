import { Footer } from "footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className={" bg-green-100 text-green-600 hide-scrollbar"}>
                <Main />
                <NextScript />
            </body>
            <Footer />
        </Html>
    );
}
