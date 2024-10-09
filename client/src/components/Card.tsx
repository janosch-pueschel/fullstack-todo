import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <div className={`${className} bg-neutral-50 rounded-2xl p-5 shadow-sm`}>
      {children}
    </div>
  );
};

export default Card;
