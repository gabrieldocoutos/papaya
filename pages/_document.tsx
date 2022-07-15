import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className={" bg-neutral-100 text-neutral-600 hide-scrollbar"}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
