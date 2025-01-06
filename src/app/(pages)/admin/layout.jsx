import React from "react";

const adminTemplate = ({ children }) => {
  return (
    <div className="flex min-h-screen font-bold text-2xl text-center">
      <div className="w-1/4 bg-indigo-700 py-4">
        <h1>Sidebar</h1>
      </div>
      <div className="w-3/4 bg-gray-100 py-4">{children}</div>
    </div>
  );
};

export default adminTemplate;
