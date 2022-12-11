import Remux from "remux-preview";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Remux scale={0.99}>
      <Component {...pageProps} />
    </Remux>
  )
}

export default MyApp;
