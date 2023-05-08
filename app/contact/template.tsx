'use client'
import Theme from "../../components/Theme";

export default function Template({ children }: {
    children: React.ReactNode
  }) {
    return <div><Theme>{children}</Theme></div>;
  }