import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import "../styles/globals.css";
import Layout from "@/components/layout";
import Favicon from "../public/favicon.ico";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Favicon} />
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
