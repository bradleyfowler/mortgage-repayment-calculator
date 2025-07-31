interface InputProps {
  name: string;
  label: string;
  type: string;
}

export default function Input({ name, label, type }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} />
    </>
  );
}
