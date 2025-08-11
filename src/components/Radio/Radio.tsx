import "./Radio.css";

interface RadioProps {
  label: string;
  name: string;
  value?: string;
}

export default function Radio({ name, label, value }: RadioProps) {
  return (
    <label className="radio-container">
      <input className="radio-input" type="radio" name={name} value={value} />
      <span className="radio-label">{label}</span>
    </label>
  );
}
