import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";

import axios from "axios";

import styledLibraryItem from "./LibraryItemPage.module.css";

import meme from "../../assets/images/7rdqyf.jpg";
import { AiOutlineArrowLeft } from "react-icons/ai";

const LibraryItemPage = () => {
  const { id } = useParams();

  // navigate
  const navigate = useNavigate();

  // state
  const [country, setCountry] = useState<any>();
  const [borders, setBorders] = useState<string[]>();

  // svg aspect ratio
  const svgUrl: string = country ? country[0].flags.png : "";
  const img = new Image();

  img.onload = () => {
    const aspectRatio = img.width / img.height;
    document.documentElement.style.setProperty(
      "--aspect-ratio",
      `${aspectRatio}`
    );
  };

  img.src = svgUrl;
  // motion
  const containerVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    initial: { scale: 0, x: -100 },
    animate: { scale: 1, x: 0 },
  };
  // query
  const { data } = useQuery(["country", id], async () => {
    const data = await axios.get(
      `https://restcountries.com/v3.1/name/${id}?fullText=true`
    );
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
    }
    if (countryBorders) {
      setBorders(countryBorders.data);
    }
  }, [data, country, countryBorders]);

  return (
    <main className={styledLibraryItem.wrapper}>
      <motion.div
        className={`${styledLibraryItem.btn} btn-back`}
        onClick={() => navigate("/library")}
        variants={itemVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5em",
          }}
        >
          <motion.span
            initial={{ x: 0, opacity: 1 }}
            animate={{
              x: [0, -25],
              opacity: [1, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 2,
              duration: 0.75,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AiOutlineArrowLeft />
          </motion.span>
          <p>Back</p>
        </span>
      </motion.div>
      {country && country[0].name.common === "Antarctica" ? (
        <img src={meme} alt="meme" style={{ width: "70%" }} />
      ) : (
        <div className={styledLibraryItem.container}>
          {country && (
            <>
              <motion.div
                className={styledLibraryItem.imgWrapper}
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                <div
                  className={`${styledLibraryItem.imgContainer} img-container`}
                >
                  <img src={country[0].flags.svg} alt="" />
                </div>
              </motion.div>

              {country[0].capital && country[0].capitalInfo.latlng ? (
                <motion.div
                  className={styledLibraryItem.mapWrapper}
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                >
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
                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
                          <b>{country[0].capital}</b> - capital city of{" "}
                          <b>{country[0].name.common}</b>
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </motion.div>
              ) : (
                "There is no viewable land"
              )}
              <motion.div
                className={styledLibraryItem.statsWrapper}
                variants={containerVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.1 }}
              >
                <div className={styledLibraryItem.countryNameContainer}>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1] }}
                    transition={{ duration: 1 }}
                    className={styledLibraryItem.countryName}
                  >
                    {country[0].name.common}
                  </motion.h2>
                </div>

                <div className={styledLibraryItem.statsContainer}>
                  <div className={styledLibraryItem.stats}>
                    <div className={styledLibraryItem.statsLeft}>
                      <motion.span
                        variants={itemVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.18 }}
                      >
                        <b>Native Name:</b>
                        <p>
                          {
                            Object.values<any>(country[0].name.nativeName)[0]
                              .common
                          }
                        </p>
                      </motion.span>
                      <motion.span
                        variants={itemVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.22 }}
                      >
                        <b>Population:</b>
                        <p>
                          {new Intl.NumberFormat().format(
                            country[0].population
                          )}
                        </p>
                      </motion.span>
                      <motion.span
                        variants={itemVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.26 }}
                      >
                        <b>Region:</b>
                        <p>{country[0].region}</p>
                      </motion.span>
                      <motion.span
                        variants={itemVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.3 }}
                      >
                        <b>Sub Region:</b>
                        <p>{country[0].subregion}</p>
                      </motion.span>
                      <motion.span
                        variants={itemVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.34 }}
                      >
                        <b>Capital:</b>
                        <p>{country[0].capital}</p>
                      </motion.span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <motion.div
                        className={styledLibraryItem.line}
                        variants={itemVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.36 }}
                      ></motion.div>
                      <div className={styledLibraryItem.statsRight}>
                        <motion.span
                          variants={itemVariants}
                          initial="initial"
                          animate="animate"
                          transition={{ delay: 0.38 }}
                        >
                          <b>Top Level Domain:</b>
                          <p>{country[0].tld}</p>
                        </motion.span>
                        <motion.span
                          variants={itemVariants}
                          initial="initial"
                          animate="animate"
                          transition={{ delay: 0.42 }}
                        >
                          <b>Currencies:</b>
                          <p>
                            {country[0].currencies
                              ? Object.values<any>(country[0].currencies)[0]
                                  .name
                              : ""}
                          </p>
                        </motion.span>
                        <motion.span
                          variants={itemVariants}
                          initial="initial"
                          animate="animate"
                          transition={{ delay: 0.46 }}
                        >
                          <b>Languages:</b>
                          <p>
                            {Object.values<any>(country[0].languages).join(
                              ", "
                            )}
                          </p>
                        </motion.span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className={styledLibraryItem.bordersContainer}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.5 }}
                  >
                    <motion.b
                      variants={itemVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.54 }}
                    >
                      Border Countries:
                    </motion.b>
                    {isLoading ? (
                      <span className="country-borders-container">
                        loading...
                      </span>
                    ) : borders ? (
                      borders.map((item: any, index: number) => (
                        <motion.span
                          key={`${item.name.common}${index}`}
                          className="country-borders-container"
                          variants={itemVariants}
                          initial="initial"
                          animate="animate"
                          transition={{ delay: 0.58 }}
                        >
                          {item.name.common}
                        </motion.span>
                      ))
                    ) : (
                      <motion.span
                        className="country-borders-container"
                        variants={itemVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.58 }}
                      >
                        This country has no borders
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      )}
    </main>
  );
};

export default LibraryItemPage;
