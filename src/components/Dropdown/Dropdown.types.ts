export interface DropdownProps {
  options: string[];
  disabled?: boolean;
  selectedValue?: string;
  onSelect?: (value: string) => void;
}
