import Radio from "./Radio/Radio";

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
    <Radio value={option.value} name={option.name} label={option.label} />
  ));
}
