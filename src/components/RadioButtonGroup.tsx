import Input from "./Input";

interface RadioButtonOption {
  label: string;
  name: string;
  value: string;
}

interface RadioButtonGroupProps {
  options: RadioButtonOption[];
}

export default function RadioButtonGroup({ options }: RadioButtonGroupProps) {
  return options.map((option) => (
    <Input
      value={option.value}
      name={option.name}
      label={option.label}
      type="radio"
    />
  ));
}
