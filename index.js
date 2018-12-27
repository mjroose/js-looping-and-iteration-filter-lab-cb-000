// Code your solution in this file
const findMatching = (drivers, query) => {
  const lowerCaseQuery = query.toLowerCase();
  drivers.filter( (driver) => { driver.toLowerCase() === lowerCaseQuery } );
};
