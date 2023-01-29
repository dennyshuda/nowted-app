import { ReactNode } from "react";

interface LayoutType {
  children: ReactNode;
}

export default function Layout({ children }: LayoutType) {
  return <div className="flex">{children}</div>;
}
