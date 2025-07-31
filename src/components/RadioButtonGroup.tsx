import Input from "./Input";

interface RadioButtonOption {
  label: string;
  value: string;
}

interface RadioButtonGroupProps {
  options: RadioButtonOption[];
}

export default function RadioButtonGroup({ options }: RadioButtonGroupProps) {
  return options.map((option) => (
    <Input name={option.value} label={option.label} type="radio" />
  ));
}
