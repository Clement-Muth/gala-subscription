import { defaultSeo } from "components/utils/defaultSeo";
import { DefaultSeo } from "next-seo";
import React from "react";
import "../public/static/css/index.css";

const App = ({ Component, pageProps, errors }) => (
  <>
    <DefaultSeo {...defaultSeo()} />
    <Component {...pageProps} errors={errors} />
  </>
);

export default App;
