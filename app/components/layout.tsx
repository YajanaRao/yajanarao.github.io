import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100 dark:bg-[#16181b] min-h-screen overflow-hidden">
      <div className="container max-w-screen-md mx-auto p-8 prose dark:prose-invert">
        <Header />
        <main className="mb-16 mt-12">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
