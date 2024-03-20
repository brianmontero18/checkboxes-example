import React from "react";
import Checkbox from "./Checkbox";

type CountryOption = {
  label: string;
  value: string;
};

type CountryOptionsMap = {
  [key in CountryOption["value"]]: boolean;
};

const countryList: CountryOption[] = [
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
  const [selection, setSelection] = React.useState<CountryOptionsMap>({});
  const isSelectedAll = countryList.length === Object.keys(selection).length;

  const handleSelectAll = () => {
    const updatedSelection = !isSelectedAll
      ? countryList.reduce(
          (prevSelection, country) => ({
            ...prevSelection,
            [country.value]: true,
          }),
          {},
        )
      : {};

    setSelection(updatedSelection);
  };

  const handleCountryChange = (countryValue: string) => {
    setSelection(({ [countryValue]: isSelected, ...rest }) => ({
      // If the country was previously selected, remove it from the selection
      // otherwise, add it to the selection
      ...rest,
      ...(!isSelected ? { [countryValue]: true } : {}),
    }));
  };

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
            onChange={() => handleCountryChange(value)}
          />
          <br key={`br-${value}`} />
        </>
      ))}
    </div>
  );
}

export default App;
