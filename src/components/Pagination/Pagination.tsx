import React from "react";
import styledPagination from "./Pagination.module.css";

interface Props {
  loadCountries: () => void;
}

const Pagination: React.FC<Props> = ({ loadCountries }) => {
  return (
    <div className={styledPagination.loadCountriesContainer}>
      <button
        onClick={loadCountries}
        className={`${styledPagination.loadCountriesElement} load-countries-btn`}
      >
        View more countries
      </button>
    </div>
  );
};

export default Pagination;
