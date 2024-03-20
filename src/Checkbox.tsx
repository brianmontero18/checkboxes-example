import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Checkbox({ label, checked, onChange }: CheckboxProps): JSX.Element {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

export default Checkbox;
