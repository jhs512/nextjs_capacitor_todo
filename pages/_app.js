import { CacheProvider } from "@emotion/react";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import PropTypes from "prop-types";
import * as React from "react";
import { RecoilRoot } from "recoil";

import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";
import { useSsrComplectedState } from "../states";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="할일관리서비스 투두 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <LocalizationProvider dateAdapter={DateAdapter}>
          <RecoilRoot>
            <MyAppInner>
              <Component {...pageProps} />
            </MyAppInner>
          </RecoilRoot>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

function MyAppInner({ children }) {
  const setSsrCompleted = useSsrComplectedState();
  React.useEffect(setSsrCompleted, [setSsrCompleted]);

  return children;
}
