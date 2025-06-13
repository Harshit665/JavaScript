// date is calculated from 1 januwary 1970 in milliseconds to know more read the mdn documentation

let myDate = new Date(); // current date
console.log(myDate); // e.g., 2023-10-01T12:00:00.000Z
console.log(myDate.toString()); // e.g., "Sun Oct 01 2023 12:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(myDate.toDateString()); // e.g., "Sun Oct 01 2023"
console.log(myDate.toLocaleString()); // e.g., "1/10/2023,
console.log(myDate.toISOString()); // e.g., "2023-10-01T12:00:00.000Z"
console.log(myDate.toTimeString()); // e.g., "12:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(myDate.toJSON);

let myCreatedDate = new Date("2025-01-15"); // specific date
console.log(myCreatedDate); // e.g., 2025-01-15T00:00:00

let timeStamp = Date.now(); // current timestamp in milliseconds from 1 jan 1970 
console.log(timeStamp); // e.g., 1700000000000

// now if we want to compare two dates like myCreatedDate and timeStamp then we can do it like this

console.log(myCreatedDate.getTime()); // get time in milliseconds from 1 jan 1970 now we can compare it with timeStamp

// there are many methods to get the date and time from the date object
let newDate = new Date();
console.log(newDate.getDay()); // get day of the week (0-6, where 0 is Sunday)
console.log(newDate.getDate()); // get day of the month (1-31) similarly many more methods are available
