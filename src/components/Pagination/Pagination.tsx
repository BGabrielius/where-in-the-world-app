import React from "react";
import styledPagination from "./Pagination.module.css";
import { motion } from "framer-motion";

interface Props {
  page: number;
  swapPage: (e: any) => void;
  isNextValid: boolean;
}

const Pagination: React.FC<Props> = ({ page, swapPage, isNextValid }) => {
  // motion
  const motionContainer = {
    initial: {
      x: 100,

      scale: 0,
    },
    animate: {
      x: 0,

      scale: 1,
    },
  };
  const motionItem = {
    initial: {
      scaleX: 0,

      opacity: 0,
    },
    animate: {
      scaleX: 1,

      opacity: 1,
    },
  };
  return (
    <motion.div
      className={styledPagination.wrapper}
      variants={motionContainer}
      whileInView={"animate"}
      initial={"initial"}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`${styledPagination.container} pagination-container`}>
        <motion.div
          variants={motionItem}
          whileHover={page === 1 ? {} : { scale: 1.1 }}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styledPagination.prevnextContainer}
        >
          <motion.button
            onClick={(e) => swapPage(e)}
            className={`${styledPagination.prevnextBtn}  prev-next-btn ${
              page === 1 && styledPagination.disabledBtn
            }`}
            disabled={page === 1}
            value={"prev"}
          >
            Prev
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: [0, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className={styledPagination.currentPage}>{page}</p>
        </motion.div>
        <motion.div
          variants={motionItem}
          whileHover={isNextValid ? { scale: 1.1 } : {}}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${styledPagination.prevnextContainer} prev-next-container`}
        >
          <motion.button
            onClick={(e) => swapPage(e)}
            className={` ${styledPagination.prevnextBtn} prev-next-btn ${
              !isNextValid && styledPagination.disabledBtn
            }`}
            disabled={!isNextValid}
            value={"next"}
          >
            Next
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pagination;
