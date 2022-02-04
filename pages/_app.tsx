import { AppProps } from "next/app";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
