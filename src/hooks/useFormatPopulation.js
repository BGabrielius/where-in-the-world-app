const useFormatPopulation = (population) => {
  if (population)
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return;
};

export default useFormatPopulation;
