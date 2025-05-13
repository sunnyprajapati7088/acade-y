import React from "react";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
