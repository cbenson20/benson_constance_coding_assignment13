export interface RadioButtonProps {
  label: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
}
