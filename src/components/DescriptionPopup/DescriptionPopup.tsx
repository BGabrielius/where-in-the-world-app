import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ReactDom from "react-dom";

import styledDescription from "./DescriptionPopup.module.css";

interface Props {
  description: string;
  onClose: () => void;
  theme: "light" | "dark";
  refs: {
    level1: HTMLLIElement | null;
    level2: HTMLLIElement | null;
    level3: HTMLLIElement | null;
  };
}

const DescriptionPopup: React.FC<Props> = ({
  description,
  onClose,
  theme,
  refs,
}) => {
  // refs
  const modalRef = useRef<HTMLDivElement>(null);

  // functions
  const handleClick = (e: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target as Node) &&
      refs.level1 &&
      !refs.level1.contains(e.target as Node) &&
      refs.level2 &&
      !refs.level2.contains(e.target as Node) &&
      refs.level3 &&
      !refs.level3.contains(e.target as Node)
    ) {
      onClose();
    }
  };

  // Side effects
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") onClose();
    });

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClose]);
  return ReactDom.createPortal(
    <>
      <motion.div
        animate={{ scale: [0, 1] }}
        transition={{ type: "tween", duration: 0.75 }}
        initial={{ scale: 0 }}
        ref={modalRef}
        id={theme}
        className={`${styledDescription.wrapper}`}
      >
        <motion.div
          className={styledDescription.container}
          animate={{ x: [150, 0], scale: [0, 1] }}
          transition={{ type: "tween", delay: 0.4 }}
          initial={{ x: 150, scale: 0 }}
        >
          <p>{description}</p>
          <p>
            Note: each difficulty will always contain questions on 10 countries,
            the only difference is the number of questions per country.
          </p>
        </motion.div>
      </motion.div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default DescriptionPopup;
