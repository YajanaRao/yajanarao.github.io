// These styles apply to every route in the application
import Layout from "@/components/layout";
import "../styles/globals.scss";
import "../styles/theme.scss";
import { Nunito_Sans } from "next/font/google";
import "prismjs/themes/prism-tomorrow.css";
import { siteMetadata } from "config";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function App({ Component, pageProps }) {
  const siteTitle = siteMetadata.title;
  return (
    <main className={nunito.className}>
      <Layout title={siteTitle}>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
