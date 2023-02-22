import React, { useEffect, useRef } from "react";
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
  // state

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
      <div ref={modalRef} id={theme} className={`${styledDescription.wrapper}`}>
        <div className={styledDescription.container}>
          <p>{description}</p>
          <p>
            Note: further difficulties are unlocked once you've completed the
            previous difficulty on all regions. Check your profile for more
            information.
          </p>
          <p>Note: anwsers are not case sensitive</p>
        </div>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default DescriptionPopup;
