import React from "react";
import { cn } from "../utils/classname";
import Footer from "./footer";
import Header from "./header";

const Layout = ({
  children,
  fullWidth = false,
  grid = false,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
  grid?: boolean;
}) => {
  return (
    <>
      <Header />
      <div
        className={cn(
          "flex flex-wrap self-center grow w-full mx-auto",
          grid ? "justify-center flex-row" : "justify-top flex-col",
          fullWidth ? "p-0" : "p-4 pb-10 max-w-[1100px]"
        )}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
