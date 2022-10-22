import type { AppProps } from "next/app";
import "../src/client/tailwindcss/styles.css";
import ContextStore from "../src/client/Context/Store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextStore>
      <Component {...pageProps} />
    </ContextStore>
  );
}

export default MyApp;
