import "./Input.css";

interface InputProps {
  label: string;
  name: string;
  type: string;
  value?: string;
}

export default function Input({ name, label, type, value }: InputProps) {
  return (
    <div className="input-wrapper">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input className="input" type={type} name={name} value={value} />
    </div>
  );
}
