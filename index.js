//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};// =============================================
// STEP 1: Define Temperature Data
// =============================================

const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

const day1InC  = (day1TempF  - 32) * 5 / 9;
const day3InC  = (day3TempF  - 32) * 5 / 9;
const day5InC  = (day5TempF  - 32) * 5 / 9;
const day7InC  = (day7TempF  - 32) * 5 / 9;
const day9InC  = (day9TempF  - 32) * 5 / 9;
const day11InC = (day11TempF - 32) * 5 / 9;
const day13InC = (day13TempF - 32) * 5 / 9;
const day15InC = (day15TempF - 32) * 5 / 9;
const day17InC = (day17TempF - 32) * 5 / 9;
const day19InC = (day19TempF - 32) * 5 / 9;
const day21InC = (day21TempF - 32) * 5 / 9;
const day23InC = (day23TempF - 32) * 5 / 9;
const day25InC = (day25TempF - 32) * 5 / 9;
const day27InC = (day27TempF - 32) * 5 / 9;
const day29InC = (day29TempF - 32) * 5 / 9;

const day2InF  = (day2TempC  * 9 / 5) + 32;
const day4InF  = (day4TempC  * 9 / 5) + 32;
const day6InF  = (day6TempC  * 9 / 5) + 32;
const day8InF  = (day8TempC  * 9 / 5) + 32;
const day10InF = (day10TempC * 9 / 5) + 32;
const day12InF = (day12TempC * 9 / 5) + 32;
const day14InF = (day14TempC * 9 / 5) + 32;
const day16InF = (day16TempC * 9 / 5) + 32;
const day18InF = (day18TempC * 9 / 5) + 32;
const day20InF = (day20TempC * 9 / 5) + 32;
const day22InF = (day22TempC * 9 / 5) + 32;
const day24InF = (day24TempC * 9 / 5) + 32;
const day26InF = (day26TempC * 9 / 5) + 32;
const day28InF = (day28TempC * 9 / 5) + 32;
const day30InF = (day30TempC * 9 / 5) + 32;

// Total and Average Temperature
const tot_temperature_in_celsius =
  day1InC  + day2TempC  +
  day3InC  + day4TempC  +
  day5InC  + day6TempC  +
  day7InC  + day8TempC  +
  day9InC  + day10TempC +
  day11InC + day12TempC +
  day13InC + day14TempC +
  day15InC + day16TempC +
  day17InC + day18TempC +
  day19InC + day20TempC +
  day21InC + day22TempC +
  day23InC + day24TempC +
  day25InC + day26TempC +
  day27InC + day28TempC +
  day29InC + day30TempC;

const tot_temperature_in_fahrenheit =
  day1TempF  + day2InF  +
  day3TempF  + day4InF  +
  day5TempF  + day6InF  +
  day7TempF  + day8InF  +
  day9TempF  + day10InF +
  day11TempF + day12InF +
  day13TempF + day14InF +
  day15TempF + day16InF +
  day17TempF + day18InF +
  day19TempF + day20InF +
  day21TempF + day22InF +
  day23TempF + day24InF +
  day25TempF + day26InF +
  day27TempF + day28InF +
  day29TempF + day30InF;

const avg_temperature_in_celsius    = tot_temperature_in_celsius    / 30;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

console.log("Total in Celsius: "      + tot_temperature_in_celsius);
console.log("Total in Fahrenheit: "   + tot_temperature_in_fahrenheit);
console.log("Average in Celsius: "    + avg_temperature_in_celsius);
console.log("Average in Fahrenheit: " + avg_temperature_in_fahrenheit);