import NextDocument, {
    Head,
    Main,
    DocumentContext,
    NextScript,
} from "next/document";
import * as React from "react";

export default class Document extends NextDocument {
    public static async getInitialProps(context: DocumentContext) {
        return await super.getInitialProps(context);
    }

    public render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <link
                        href="https://use.fontawesome.com/releases/v5.1.1/css/all.css"
                        rel="stylesheet"
                    />
                    <link
                        href="https://unpkg.com/bootstrap@4.1.3/dist/css/bootstrap.min.css"
                        key="bootstrap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
