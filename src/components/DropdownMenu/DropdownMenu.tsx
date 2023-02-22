import React, { useState } from "react";

import styledDropdown from "./DropdownMenu.module.css";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Props {
  isChallenge: boolean;
  filterName: string;
  handleFilter: (e: any) => void;
}

const DropdownMenu: React.FC<Props> = ({
  isChallenge,
  filterName,
  handleFilter,
}) => {
  // state
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  // const [selectedOptionName, setSelectedOptionName] = useState<string>("");

  const optionsList = isChallenge
    ? ["All", "Africa", "Asia", "Americas", "Europe", "Oceania"]
    : ["Africa", "Asia", "Americas", "Europe", "Oceania"];

  // side effects

  // functions

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index: number) => {
    setIsFirstLoad(false);

    if (index !== selectedOption || isFirstLoad) {
      handleFilter(optionsList[index]);
      setSelectedOption(index);
      setIsOptionsOpen(false);
      // setSelectedOptionName(optionsList[index]);
    }
  };

  const handleKeyDown = (index: number) => (e: any) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e: any) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      // case "ArrowUp":
      //   e.preventDefault();
      //   setSelectedOption(
      //     selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
      //   );
      //   break;
      // case "ArrowDown":
      //   e.preventDefault();
      //   setSelectedOption(
      //     selectedOption == optionsList.length - 1 ? 0 : selectedOption + 1
      //   );
      //   break;
      default:
        break;
    }
  };

  return (
    <div className={styledDropdown.wrapper}>
      <div className={styledDropdown.container}>
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className={`filter-region-button ${styledDropdown.button} ${
            isOptionsOpen ? styledDropdown.expanded : ""
          }`}
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          {isFirstLoad ? filterName : optionsList[selectedOption]}
          {isOptionsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        <ul
          className={`filter-region-ul ${styledDropdown.optionsList} ${
            isOptionsOpen ? styledDropdown.show : ""
          }`}
          role="listbox"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {optionsList.map((option, index) => (
            <li
              key={option}
              id={option}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => setSelectedThenCloseDropdown(index)}
              className={`filter-region-option ${styledDropdown.option} ${
                selectedOption === index &&
                isFirstLoad === false &&
                styledDropdown.selectedOption
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
