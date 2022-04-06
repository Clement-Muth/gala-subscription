import { defaultSeo } from "components/utils/defaultSeo";
import { DefaultSeo } from "next-seo";
import React from "react";

const App = ({ Component, pageProps, errors }) => (
  <>
    <DefaultSeo {...defaultSeo()} />
    <Component {...pageProps} errors={errors} />
  </>
);

export default App;
