import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import "../styles/globals.css";
import Layout from "@/components/layout";
import Favicon from "../public/favicon.ico";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://yajana.in" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href={Favicon} />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
