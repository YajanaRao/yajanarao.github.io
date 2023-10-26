// These styles apply to every route in the application
import "../styles/globals.scss";
import "../styles/theme.scss";
import { Nunito_Sans } from "next/font/google";
import "prismjs/themes/prism-tomorrow.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  );
}
