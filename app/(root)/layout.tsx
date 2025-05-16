import Header from "@/components/shared/Header";
import React from "react";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
