import NextApp, { Container } from "next/app";
import Head from "next/head";
import * as React from "react";

import { Layout } from "../components/Layout";

class App extends NextApp {
    public render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>Next js</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
                    />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        );
    }
}

export default App;
