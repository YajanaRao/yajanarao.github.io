import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <div className="container max-w-screen-md mx-auto p-8">
        <Header title={title} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
