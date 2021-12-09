import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/style.css";
import React from "react";
import Head from "next/head";
import App, { AppInitialProps, AppContext } from "next/app";
import withRedux from "next-redux-wrapper";
import { Store } from "@reduxjs/toolkit";
import { NextPageContext } from "next";

import { AppState, makeStore } from "../store";
import Layout from "../component/Layout";

export interface Context extends NextPageContext {
  store: Store<AppState>;
}

class MyApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        appProp: ctx.pathname,
      },
    };
  };

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Portfolio App</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
//@ts-ignore
export default withRedux(makeStore)(MyApp);
