import React from "react";

export type CheckboxOption = {
  label: string;
  value: string;
};

type SelectionMap = {
  [key in CheckboxOption["value"]]: boolean;
};

function useCheckboxList(list: CheckboxOption[]) {
  const [selection, setSelection] = React.useState<SelectionMap>({});
  const isSelectedAll = list.length === Object.keys(selection).length;

  const handleSelectAll = () => {
    const updatedSelection = !isSelectedAll
      ? list.reduce(
          (prevSelection, option) => ({
            ...prevSelection,
            [option.value]: true,
          }),
          {},
        )
      : {};

    setSelection(updatedSelection);
  };

  const handleOptionChange = (optionValue: string) => {
    setSelection(({ [optionValue]: isSelected, ...rest }) => ({
      // If the option was previously selected, remove it from the selection
      // otherwise, add it to the selection
      ...rest,
      ...(!isSelected ? { [optionValue]: true } : {}),
    }));
  };

  return { selection, isSelectedAll, handleSelectAll, handleOptionChange };
}

export default useCheckboxList;
