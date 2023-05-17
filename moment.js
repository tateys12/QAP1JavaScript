const moment = require('moment');

const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log('Formatted Date:', formattedDate);

// Adds days to the current date
const futureDate = moment().add(7, 'days').format('MMMM Do YYYY, h:mm:ss a');
console.log('Future Date:', futureDate);

// Subtracts hours from the current date
const pastDate = moment().subtract(3, 'hours').format('MMMM Do YYYY, h:mm:ss a');
console.log('Past Date:', pastDate);

// Gets the difference in days between two dates
const date1 = moment('2022-01-01');
const date2 = moment('2022-01-10');
const diffInDays = date2.diff(date1, 'days');
console.log('Difference in Days:', diffInDays);
