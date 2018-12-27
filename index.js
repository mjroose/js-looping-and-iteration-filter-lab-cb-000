// Code your solution in this file
const findMatching = (drivers, query) => {
  const lowerCaseQuery = query.toLowerCase();

  return drivers.filter( (driver) => {
    return driver.toLowerCase() === lowerCaseQuery;
  });
};
