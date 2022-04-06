import React from "react";
import { Head, Html, Main, NextScript } from "next/document";
import { Box } from "rebass";

const CustomDocument = () => (
  <Html lang="fr" style={{ scrollBehavior: "smooth" }}>
    <Head>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
      <meta name="theme-color" content="#13111c" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="http://fonts.cdnfonts.com/css/steelfish" />
      <link
        href="https://db.onlinewebfonts.com/c/5dec1e12a2de089d8e76f394843834cb?family=Carta+Marina"
        rel="stylesheet"
      />
    </Head>
    <Box as="body" sx={{ bg: "#e7e6d6", p: 2 }}>
      <Main />
      <NextScript />
    </Box>
  </Html>
);

export default CustomDocument;
