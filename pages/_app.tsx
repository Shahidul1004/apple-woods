import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/nav/navbar";
import React from "react";
import ContextProvider from "../context";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement!.removeChild(jssStyles);
  //   }
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
