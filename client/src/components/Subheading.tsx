import { FC } from "react";

interface Props {
  title: string;
}

const Subheading: FC<Props> = ({ title }) => {
  return <h1 className="text-slate-400 uppercase font-medium my-3">{title}</h1>;
};

export default Subheading;
