import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import axios from "axios";

import styledLibraryItem from "./LibraryItemPage.module.css";

import { AiOutlineArrowLeft } from "react-icons/ai";

const LibraryItemPage = () => {
  const { id } = useParams();

  // variables

  // navigate
  const navigate = useNavigate();

  // state
  const [country, setCountry] = useState<any>();
  const [borders, setBorders] = useState<any>();
  // query
  const { data } = useQuery(["country", id], async () => {
    const data = await axios.get(`https://restcountries.com/v3.1/name/${id}`);
    return data;
  });

  const border = data?.data[0].borders;

  const { data: countryBorders, isLoading } = useQuery(
    ["borders", border],
    async () => {
      return await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${border.toString()}`
      );
    },
    {
      enabled: !!border,
    }
  );

  // side effects
  useEffect(() => {
    if (data) {
      setCountry(data.data);
      console.log();
    }
    if (countryBorders) {
      setBorders(countryBorders.data);
    }
    if (country) {
      console.log(country[0].borders);
      console.log(country[0].capitalInfo, "from country");
    }
  }, [data, country, countryBorders]);

  // functions
  const formatPopulation = (population: number) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <main className={styledLibraryItem.wrapper}>
      <div
        className={`${styledLibraryItem.btn} item-page-btn`}
        onClick={() => navigate("/library")}
      >
        <AiOutlineArrowLeft />
        <p>Back</p>
      </div>
      <div className={styledLibraryItem.container}>
        {country && (
          <>
            <div className={styledLibraryItem.imgWrapper}>
              <div
                className={`${styledLibraryItem.imgContainer} img-container`}
              >
                <img src={country[0].flags.png} alt="" />
              </div>
            </div>

            {country[0].capital && country[0].capitalInfo.latlng ? (
              <div className={styledLibraryItem.mapWrapper}>
                <div
                  className={`${styledLibraryItem.mapContainer} map-container`}
                >
                  <MapContainer
                    center={
                      country[0].capitalInfo.latlng
                        ? [
                            country[0].capitalInfo.latlng[0],
                            country[0].capitalInfo.latlng[1],
                          ]
                        : [country[0].latlng[0], country[0].latlng[1]]
                    }
                    zoom={10}
                    scrollWheelZoom={true}
                    minZoom={1}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      noWrap={true}
                    />
                    <Marker
                      position={
                        country[0].capitalInfo.latlng && [
                          country[0].capitalInfo.latlng[0],
                          country[0].capitalInfo.latlng[1],
                        ]
                      }
                    >
                      <Popup>
                        {country[0].capital} - capital city of{" "}
                        {country[0].name.common}
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            ) : (
              "There is no viewable land"
            )}
            <div className={`${styledLibraryItem.statsWrapper} info-container`}>
              <h2>{country[0].name.common}</h2>

              <div className={`${styledLibraryItem.statsContainer}`}>
                <div className={`${styledLibraryItem.stats}`}>
                  <div className={styledLibraryItem.statsLeft}>
                    <span>
                      <b>Native Name:</b>
                      <p>
                        {
                          Object.values<any>(country[0].name.nativeName)[0]
                            .common
                        }
                      </p>
                    </span>
                    <span>
                      <b>Population:</b>
                      <p>{formatPopulation(country[0].population)}</p>
                    </span>
                    <span>
                      <b>Region:</b>
                      <p>{country[0].region}</p>
                    </span>
                    <span>
                      <b>Sub Region:</b>
                      <p>{country[0].subregion}</p>
                    </span>
                    <span>
                      <b>Capital:</b>
                      <p>{country[0].capital}</p>
                    </span>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div className={styledLibraryItem.line}></div>
                    <div className={styledLibraryItem.statsRight}>
                      <span>
                        <b>Top Level Domain:</b>
                        <p>{country[0].tld}</p>
                      </span>
                      <span>
                        <b>Currencies:</b>
                        <p>
                          {country[0].currencies
                            ? Object.values<any>(country[0].currencies)[0].name
                            : ""}
                        </p>
                      </span>
                      <span>
                        <b>Languages:</b>
                        <p>
                          {Object.values<any>(country[0].languages).join(", ")}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styledLibraryItem.bordersContainer}>
                  <b className="country-borders-b">Border Countries: </b>
                  {isLoading ? (
                    <span className="country-borders-span">loading...</span>
                  ) : borders ? (
                    borders.map((item: any) => (
                      <span
                        key={item.name.common}
                        className="country-borders-span"
                      >
                        {item.name.common}
                      </span>
                    ))
                  ) : (
                    <span className="country-borders-span">
                      This country has no borders
                    </span>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default LibraryItemPage;
