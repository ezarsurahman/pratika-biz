"use client";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
        <main className={`min-h-screen transition-opacity duration-500`}>
        {children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;