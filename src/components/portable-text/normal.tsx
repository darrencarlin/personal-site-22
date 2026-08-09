import type React from "react";

export const Normal = ({ children }: { children?: React.ReactNode }) => {
  return <p className="mb-4 font-light">{children}</p>;
};
