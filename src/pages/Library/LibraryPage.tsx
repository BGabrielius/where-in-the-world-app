import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

import styledLibrary from "./LibraryPage.module.css";
import { BiSearch } from "react-icons/bi";

import DropdownMenu from "../../components/DropdownMenu";
import Pagination from "../../components/Pagination";

const fetchCountries = async (host: string, page: number) => {
  const data = await axios.get(host);
  const countriesPerPage = 12;

  const lastIndex = page * countriesPerPage;
  // const firstIndex = lastIndex - countriesPerPage;
  const paginatedData = data.data.slice(0, lastIndex);

  let moreCountries: boolean;

  if (data.data.length <= page * countriesPerPage) {
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
  // Variables

  // navigation
  const navigate = useNavigate();

  // -- state
  const [host, setHost] = useState<string>(
    "https://restcountries.com/v3.1/all"
  );
  const [countries, setCountries] = useState<any>();
  const [message, setMessage] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isMoreData, setIsMoreData] = useState<boolean>(false);

  // for styling
  const [currentStyle, setCurrentStyle] = useState({
    display: "none",
    width: "2%",
  });
  // --- state input
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  // hooks

  // Query
  const { data, isLoading } = useQuery(
    ["countries", host, page],
    () => fetchCountries(host, page),
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
      retry: 1,
    }
  );

  // side effects
  useEffect(() => {
    console.log("message from useefect", message);

    // if (region) {
    //   setHost(`https://restcountries.com/v3.1/region/${region}`);
    // }

    if (data) {
      setMessage("");
      setCountries(data.paginated);
      setIsMoreData(data.isMoreCountries);
    } else if (isLoading) setMessage("Loading...");
  }, [data, countries, host, isLoading, message, setIsMoreData]);

  // refs
  const searchInput = useRef<HTMLInputElement>(null);

  // functions
  const formatPopulation = (population: number) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const filterByRegion = (e: any) => {
    setHost(`https://restcountries.com/v3.1/region/${e}`);
    // setRegion(e.target.value);
    // console.log(e.target.value);
    setPage(1);
    console.log(isMoreData, "haa");
  };

  const filterBySearch = (e: any) => {
    // if (
    //   !data?.data.filter((prev: any) =>
    //     prev.name.common.includes(e.target.value)
    //   )
    // ) {
    //   return;
    // }
    if (!e.target.value) {
      setHost("https://restcountries.com/v3.1/all");
    }
    if (e.target.value) {
      setHost(`https://restcountries.com/v3.1/name/${e.target.value}`);
      setSearchInputValue(e.target.value);
      // validateSearch(e.target.value);
      setPage(1);
    }

    // console.log(e.target.value);
  };

  // const validateSearch = (e: any) => {
  //   console.log("from validate search", e);
  //   const validation = countries.filter((item: any) => {
  //     if (!item.common.name.includes(e)) {
  //       return false;
  //     }
  //     return item;
  //   });
  //   if (validation) setHost(`https://restcountries.com/v3.1/name/${e}`);
  //   console.log(validation);
  // };
  // console.log("countries", countries);
  // console.log("data", data);

  const loadMoreCountries = () => {
    setPage(page + 1);
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
            className={`${styledLibrary.searchContainer} filter`}
            style={{ width: currentStyle.width }}
          >
            <BiSearch
              className={`${styledLibrary.searchIcon} magnifyingGlass`}
              onClick={setCurrentSearchDisplay}
            />
            <input
              type="search"
              onChange={filterBySearch}
              placeholder="Search for a country..."
              className={`${styledLibrary.searchFilter} searchInput`}
              ref={searchInput}
              style={{ display: currentStyle.display }}
            />
          </div>
          <DropdownMenu
            isChallenge={false}
            filterName="Filter by Region"
            handleFilter={filterByRegion}
          />
        </div>
        {message && (
          <p className={`${styledLibrary.errorMessage} error-msg`}>{message}</p>
        )}
        <div className={styledLibrary.countriesContainer}>
          {countries ? (
            countries.map((item: any) => (
              <div
                key={item.name.common}
                className={`${styledLibrary.countryContainer} countryShadow`}
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
                <div className={`${styledLibrary.statsContainer} countrySumm`}>
                  <h3 className={styledLibrary.countryHeadline}>
                    {item.name.common}
                  </h3>
                  <p className={styledLibrary.countryStats}>
                    <b>Population: </b>
                    {formatPopulation(item.population)}
                  </p>
                  <p className={styledLibrary.countryStats}>
                    <b>Region: </b>
                    {item.region}
                  </p>
                  <p
                    className={`${styledLibrary.countryStats} ${styledLibrary.capital}`}
                  >
                    {item.capital && (
                      <>
                        <b>Capital: </b> {item.capital[0]}
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        {isMoreData && <Pagination loadCountries={loadMoreCountries} />}
      </div>
    </main>
  );
};

export default LibraryPage;
