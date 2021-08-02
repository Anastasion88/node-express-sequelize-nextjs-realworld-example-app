import Head from "next/head";

import Footer from "components/common/Footer";
import Navbar from "components/common/Navbar";
import ContextProvider from "lib/context";
import "ionicons/css/ionicons.min.css";
import "style.scss";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
    <ContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ContextProvider>
  </>
);

export default MyApp;