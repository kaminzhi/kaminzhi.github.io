"use client";

import Head from "next/head";
import { viewConfig } from "@/config/view";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Salsa, Carter_One } from "next/font/google";
import "../styles/globals.css";

const salsa = Salsa({
  weight: "400",
  subsets: ["latin"],
});

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{viewConfig.title}</title>
        <meta name="description" content={viewConfig.description} />
        <link rel="icon" href={viewConfig.favicon} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={viewConfig.title} />
        <meta property="og:description" content={viewConfig.description} />
        <meta property="og:image" content={viewConfig.favicon} />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
      </Head>
      <style jsx global>{`
        :root {
          --font-salsa: ${salsa.style.fontFamily};
          --font-carter-one: ${carterOne.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
