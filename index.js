// Code your solution in this file
const findMatching = (drivers, query) => {
  const lowerCaseQuery = query.toLowerCase();

  const matchingDrivers = drivers.filter( (driver) => {
    driver.toLowerCase() === lowerCaseQuery
  });
  console.log("Matching drivers: " + matchingDrivers);
  return matchingDrivers;
};
