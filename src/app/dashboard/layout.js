import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-1/3 bg-red-500">
        sidebar

      </div>
      <div className="w-2/3 bg-blue-500">{children} </div>
    </div>
  );
};

export default Layout;
