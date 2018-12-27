// Code your solution in this file
const findMatching = (drivers, query) => {
  const lowerCaseQuery = query.toLowerCase();
  console.log(lowerCaseQuery);
  drivers.filter( (driver) => { driver.toLowerCase() === lowerCaseQuery } );
};
