import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Navbar />
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default App;
