import "./Button.css";

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return <button className="button">{label}</button>;
}
