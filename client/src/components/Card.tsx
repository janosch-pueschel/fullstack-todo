import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
}

export default function Card({ children, className }: Props) {
  return (
    <div className={`${className} bg-neutral-50 rounded-2xl p-5 shadow-sm`}>
      {children}
    </div>
  );
}
