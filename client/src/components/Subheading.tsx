interface Props {
  title: string;
}

export default function Subheading({ title }: Props) {
  return <h1 className="text-slate-400 uppercase font-medium">{title}</h1>;
}
