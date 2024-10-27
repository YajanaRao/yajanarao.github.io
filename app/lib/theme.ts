import { createCookie } from "@remix-run/node";

export const themeCookie = createCookie("theme", {
  sameSite: "lax",
  // secure: process.env.NODE_ENV === "production",
  path: "/",
  httpOnly: true,
});
