import React from "react";
import Checkbox from "./Checkbox";
import useCheckboxList, { CheckboxOption } from "./useCheckboxList";

const countryList: CheckboxOption[] = [
  {
    label: "India",
    value: "IN",
  },
  {
    label: "USA",
    value: "US",
  },
  {
    label: "France",
    value: "FR",
  },
];

function App() {
  const { selection, isSelectedAll, handleSelectAll, handleOptionChange } = useCheckboxList(countryList);

  return (
    <div className="App">
      <Checkbox label="Select All" checked={isSelectedAll} onChange={handleSelectAll} />
      <br />
      {countryList.map(({ label, value }) => (
        <>
          <Checkbox
            key={value}
            label={label}
            checked={Boolean(selection[value])}
            onChange={() => handleOptionChange(value)}
          />
          <br key={`br-${value}`} />
        </>
      ))}
    </div>
  );
}

export default App;
