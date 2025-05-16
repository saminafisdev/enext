import Header from "@/components/shared/Header";
import React from "react";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col p-4">{children}</main>
    </div>
  );
};

export default RootLayout;
