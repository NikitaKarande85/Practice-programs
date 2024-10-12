
// https://upload.wikimedia.org/wikipedia/commons/8/88/World_Time_Zones_Map.png
// https://www.unixtimestamp.com/


//1. Time Zones
const date3 = new Date();
console.log(date3.toString()); // Displays local date and time with the local time zone
// Fri Oct 11 2024 12:34:56 GMT+0530 (India Standard Time)
console.log(date3.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })); // Convert time to Tokyo time zone
// 10/11/2024, 4:34:56 PM (Tokyo Time)



//2. GMT (Greenwich Mean Time) Time Zone  (common time)
const date1 = new Date();
console.log(date1.toGMTString());  // "Fri, 11 Oct 2024 12:34:56 GMT"

//3. UTC (Coordinated Universal Time)     (If anyone go on moon then he saw this)
const date = new Date();
console.log(date.toUTCString());  // "Fri, 11 Oct 2024 12:34:56 GMT"


//4. ISO Standard (International Organization for Standardization) 
const date2 = new Date();
console.log(date2.toISOString());  // "2024-10-11T12:34:56.789Z"


//5. How computers keep track of time?
const currentTime = Date.now(); // Get the current time in milliseconds since Unix Epoch
console.log(`Current time in milliseconds: ${currentTime}`);