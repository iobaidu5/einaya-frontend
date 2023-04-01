import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import { AppWrapper } from "/context";
import { getSession, useCustomTheme } from "/customHooks";
import Main from ".";
import { Layout } from "/layouts";
// import { Jost } from "next/font/google";

// const jost = Jost({
//   weight: ["100", "300", "400", "500", "600", "700", "900"],
//   subsets: ["latin"],
// });

import "../styles/styles.scss";
import "../styles/globals.css";

function App({ Component, pageProps: { session, ...pageProps } }) {
  // const { theme } = useCustomTheme();

  return (
    <AppWrapper>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0-2/css/all.min.css"
          integrity="sha512-61a6zi50gYXGgd/n9+ZT2/RKnXr6lkRoWlS88AjFdoUHaIDnyBAcoE0Vs/QDU3lK3nCcUowNDqmQ8WaV0yT4qw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
          integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></Script>
      {/* <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></Script> */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
        async
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/dist/boxicons.min.js"
        integrity="sha512-y8/3lysXD6CUJkBj4RZM7o9U0t35voPBOSRHLvlUZ2zmU+NLQhezEpe/pMeFxfpRJY7RmlTv67DYhphyiyxBRA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></Script>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </AppWrapper>
  );
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
