import React, { useState } from "react";

import styledDropdown from "./DropdownMenu.module.css";
import { motion } from "framer-motion";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Props {
  isChallenge: boolean;
  filterName: string;
  handleFilter: (e: any) => void;
  isOpen?: () => void;
}

const DropdownMenu: React.FC<Props> = ({
  isChallenge,
  filterName,
  handleFilter,
  isOpen,
}) => {
  // state
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const optionsList = isChallenge
    ? ["All", "Africa", "Asia", "Americas", "Europe", "Oceania"]
    : ["Africa", "Asia", "Americas", "Europe", "Oceania"];

  // functions
  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
    if (isOpen) {
      isOpen();
    }
  };

  const setSelectedThenCloseDropdown = (index: number) => {
    setIsFirstLoad(false);

    if (index !== selectedOption || isFirstLoad) {
      handleFilter(optionsList[index]);
      setSelectedOption(index);
      setIsOptionsOpen(false);
      if (isOpen) {
        isOpen();
      }
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
          className={`region-filter-container ${styledDropdown.button} ${
            isOptionsOpen ? styledDropdown.expanded : ""
          }`}
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          {isFirstLoad ? filterName : optionsList[selectedOption]}
          {isOptionsOpen ? (
            <motion.span
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: [-20, 0], opacity: [0, 1] }}
              exit={{ y: 20, opacity: 0 }}
            >
              <IoIosArrowDown />
            </motion.span>
          ) : (
            <motion.span
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: [20, 0], opacity: [0, 1] }}
              exit={{ y: -20, opacity: 0 }}
            >
              <IoIosArrowUp />
            </motion.span>
          )}
        </button>
        <motion.ul
          initial={{ scaleY: 0, opacity: 1 }}
          animate={{
            scaleY: isOptionsOpen ? [0, 1] : [1, 0],
            opacity: [0, 1],
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "top", overflow: "hidden" }}
          className={`region-filter-container ${styledDropdown.optionsList} ${
            isOptionsOpen ? styledDropdown.show : ""
          }`}
          role="listbox"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {optionsList.map((option, index) => (
            <motion.li
              whileInView={{ y: [-10 * index, 0], opacity: [0, 1] }}
              initial={{ y: 0, opacity: 0 }}
              transition={{ delay: 0.08 * index }}
              viewport={{ once: true }}
              exit={{ y: -10 }}
              key={option}
              id={option}
              role="option"
              aria-selected={selectedOption === index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => setSelectedThenCloseDropdown(index)}
              className={`${styledDropdown.option} ${
                selectedOption === index &&
                isFirstLoad === false &&
                styledDropdown.selectedOption
              }`}
            >
              {option}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
