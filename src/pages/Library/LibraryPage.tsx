import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { motion, useScroll } from "framer-motion";

import styledLibrary from "./LibraryPage.module.css";
import { BiSearch } from "react-icons/bi";

import DropdownMenu from "../../components/DropdownMenu";
import Pagination from "../../components/Pagination";

const fetchCountries = async (
  host: string,
  multiplier: number,
  page: number
) => {
  const data = await axios.get(host);
  const countriesPerMultiplier = 12;
  const firstIndex = page === 1 ? 60 : (page - 1) * 60;
  const lastIndex =
    multiplier * countriesPerMultiplier === 60 * (page - 1)
      ? firstIndex
      : multiplier * countriesPerMultiplier;

  const paginatedData =
    page === 1
      ? data.data.slice(0, lastIndex)
      : data.data.slice(firstIndex, lastIndex);

  let moreCountries: boolean;

  if (data.data.length <= multiplier * countriesPerMultiplier) {
    moreCountries = false;
  } else {
    moreCountries = true;
  }

  const fetchedData = {
    paginated: paginatedData,
    allCountries: data.data,
    isMoreCountries: moreCountries,
  };
  return fetchedData;
};

const LibraryPage = () => {
  // -- navigation
  const navigate = useNavigate();

  // -- state
  const [host, setHost] = useState<string>(
    "https://restcountries.com/v3.1/all"
  );
  const [countries, setCountries] = useState<any>();
  const [message, setMessage] = useState<string>("");
  const [multiplier, setMultiplier] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  // --- state (input)
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  // --- state (checker)
  const [isValidNext, setIsValidNext] = useState<boolean>(false);

  // --- state (for styling)
  const [currentStyle, setCurrentStyle] = useState({
    display: "none",
    width: "2%",
  });

  // -- Query
  const { data, isLoading, isFetching, isError } = useQuery(
    ["countries", host, multiplier, page],
    () => fetchCountries(host, multiplier, page),
    {
      staleTime: 300,
      onError: () => {
        if (searchInputValue) {
          setMessage(
            "Sorry, there are no countries that would match your search"
          );
        } else {
          setMessage("Sorry an error has accured while fetching");
        }
      },
      retry: 0,
    }
  );

  // -- refs
  let errorCount = useRef<number>(0);

  // -- motion
  const { scrollY } = useScroll();

  const motionItem = {
    initial: {
      opacity: 0.2,
      x: -100,

      scale: 0.9,
    },
    animate: {
      opacity: 1,
      x: 0,

      scale: 1,
    },
  };

  // -- side effects
  useEffect(() => {
    if (data) {
      setMessage("");
      setCountries(data.paginated);
      setIsValidNext(data.isMoreCountries);
    } else if (isLoading) setMessage("Loading...");

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [data, isLoading, isFetching, isError]);

  // functions
  // Throttle (disabled)
  const throttle = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout> | null;
    return (...args: any[]) => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func(...args);
          timeoutId = null;
        }, delay);
      }
    };
  };

  const handleScroll = () => {
    if (
      data?.isMoreCountries === false ||
      isFetching ||
      data?.paginated.length % 60 === 0
    )
      return;
    let scrolledEnough = false;
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage =
      (scrollY.get() / (scrollHeight - clientHeight)) * 100;
    if (scrollPercentage >= 90) {
      scrolledEnough = true;
    } else if (scrollPercentage < 90) {
      scrolledEnough = false;
    }
    if (scrolledEnough && scrollPercentage >= 90) {
      loadMoreCountries();
      scrolledEnough = false;
    }
  };
  const throttledHandleScroll = throttle(handleScroll, 0);
  const formatPopulation = (population: number) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const filterByRegion = (e: any) => {
    setHost(`https://restcountries.com/v3.1/region/${e}`);
    setPage(1);
    setMultiplier(1);
  };

  const filterBySearch = (e: any) => {
    if (!e.target.value) {
      setHost("https://restcountries.com/v3.1/all");
      setPage(1);
      errorCount.current = 0;
    } else if (isError || errorCount.current !== 0) {
      if (errorCount.current === 0) {
        errorCount.current = e.target.value.length;
      } else if (
        errorCount.current !== 0 &&
        errorCount.current > e.target.value.length
      ) {
        setHost(`https://restcountries.com/v3.1/name/${e.target.value}`);
        setPage(1);
        setSearchInputValue(e.target.value);
        setMultiplier(1);
        errorCount.current = 0;
      } else {
        return;
      }
    } else if (e.target.value) {
      setHost(`https://restcountries.com/v3.1/name/${e.target.value}`);
      setPage(1);
      setSearchInputValue(e.target.value);
      setMultiplier(1);
      errorCount.current = 0;
    }
  };
  const throttledSearchFilter = throttle(filterBySearch, 200);
  const loadMoreCountries = () => {
    setMultiplier(multiplier + 1);
  };
  const handleResetScroll = (type: string) => {
    if (type === "prev") {
      const { scrollHeight } = window.document.documentElement;
      window.scrollTo(0, scrollHeight - window.innerHeight);
    }
    if (type === "next") window.scrollTo(0, 0);
  };
  const swapPage = (e: any) => {
    if (e.target.value === "prev") {
      if (page > 1) {
        setPage((prev: any) => prev - 1);
        setMultiplier((prev: any) => prev - 5);
        handleResetScroll("prev");
      }
    }
    if (e.target.value === "next") {
      setPage((prev: any) => prev + 1);
      loadMoreCountries();
      handleResetScroll("next");
    }
  };

  const setCurrentSearchDisplay = () => {
    setCurrentStyle({
      ...currentStyle,
      display: currentStyle.display === "none" ? "block" : "none",
      width: currentStyle.width === "2%" ? "90%" : "2%",
    });
  };

  return (
    <main className={styledLibrary.wrapper}>
      <div className={styledLibrary.container}>
        <div className={styledLibrary.filterContainer}>
          <div
            className={`${styledLibrary.searchContainer} search-filter-container`}
            style={{ width: currentStyle.width }}
          >
            <BiSearch
              className={styledLibrary.searchIcon}
              onClick={setCurrentSearchDisplay}
            />
            <input
              type="search"
              onChange={throttledSearchFilter}
              placeholder="Search for a country..."
              className={styledLibrary.searchFilter}
              style={{ display: currentStyle.display }}
            />
          </div>
          <DropdownMenu
            isChallenge={false}
            filterName="Filter by Region"
            handleFilter={filterByRegion}
          />
        </div>
        {message && <p className={styledLibrary.errorMessage}>{message}</p>}
        <motion.div className={styledLibrary.countriesContainer}>
          {countries ? (
            countries.map((item: any) => (
              <motion.div
                variants={motionItem}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.15, stiffness: 75 }}
                key={item.name.common}
                className={`${styledLibrary.countryContainer} country-card-container`}
                onClick={() =>
                  navigate(`/library/${item.name.common.toLowerCase()}`)
                }
              >
                <div className={styledLibrary.flagContainer}>
                  <img
                    src={item.flags.png}
                    alt={item.cca2}
                    className={styledLibrary.flag}
                  />
                </div>
                <div
                  className={`${styledLibrary.statsContainer} country-card-summary`}
                >
                  <h3 className={styledLibrary.countryHeadline}>
                    {item.name.common}
                  </h3>

                  <span className={styledLibrary.countryStats}>
                    <b>Population: </b>
                    <p>{formatPopulation(item.population)}</p>
                  </span>
                  <span className={styledLibrary.countryStats}>
                    <b>Region: </b>
                    <p>{item.region}</p>
                  </span>
                  <span
                    className={`${styledLibrary.countryStats} ${styledLibrary.capital}`}
                  >
                    {item.capital && (
                      <>
                        <b>Capital: </b>
                        <p>{item.capital[0]}</p>
                      </>
                    )}
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            <div></div>
          )}
        </motion.div>
        {data?.paginated.length === 60 ||
        page === 5 ||
        (data?.isMoreCountries === false && data.allCountries.length > 60) ? (
          <Pagination
            page={page}
            swapPage={swapPage}
            isNextValid={isValidNext}
          />
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

export default LibraryPage;
