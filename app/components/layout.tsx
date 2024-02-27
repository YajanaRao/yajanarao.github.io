import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <div className="container max-w-screen-md mx-auto p-8 prose dark:prose-invert">
        <Header />
        <main className="my-16">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
