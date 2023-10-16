// RouteLayout.js
import Navbar from "@/components/nav-bar/navbar";
import React from "react";

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default RouteLayout;
