import { Links, Meta, Outlet, Scripts, useLoaderData } from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Layout from "@/components/layout";
import { themeCookie } from "@/lib/theme";
import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieString = request.headers.get("Cookie");
  const theme = await themeCookie.parse(cookieString);
  return theme || "light";
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const theme = formData.get("theme") as string;
  return json(
    { theme },
    { headers: { "Set-Cookie": await themeCookie.serialize(theme) } }
  );
}

export default function App() {
  const theme = useLoaderData<string>();
  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://yajana.in" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}
