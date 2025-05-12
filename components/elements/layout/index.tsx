"use client";
import AnimationOnScroll from "@/components/AnimationOnScroll";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

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