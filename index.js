var day1TempF = 32;
var day2TempC = 25;
var day3TempF = 70;
var day4TempC = 18;
var day5TempF = 80;
var day6TempC = 15;
var day7TempF = 72;
var day8TempC = 28;
var day9TempF = 68;
var day10TempC = 20;
var day11TempF = 75;
var day12TempC = 23;
var day13TempF = 82;
var day14TempC = 30;
var day15TempF = 65;
var day16TempC = 22;
var day17TempF = 77;
var day18TempC = 26;
var day19TempF = 78;
var day20TempC = 24;
var day21TempF = 73;
var day22TempC = 21;
var day23TempF = 79;
var day24TempC = 27;
var day25TempF = 71;
var day26TempC = 19;
var day27TempF = 74;
var day28TempC = 17;
var day29TempF = 76;
var day30TempC = 29;

var day1InC  = (day1TempF  - 32) * 5 / 9;
var day3InC  = (day3TempF  - 32) * 5 / 9;
var day5InC  = (day5TempF  - 32) * 5 / 9;
var day7InC  = (day7TempF  - 32) * 5 / 9;
var day9InC  = (day9TempF  - 32) * 5 / 9;
var day11InC = (day11TempF - 32) * 5 / 9;
var day13InC = (day13TempF - 32) * 5 / 9;
var day15InC = (day15TempF - 32) * 5 / 9;
var day17InC = (day17TempF - 32) * 5 / 9;
var day19InC = (day19TempF - 32) * 5 / 9;
var day21InC = (day21TempF - 32) * 5 / 9;
var day23InC = (day23TempF - 32) * 5 / 9;
var day25InC = (day25TempF - 32) * 5 / 9;
var day27InC = (day27TempF - 32) * 5 / 9;
var day29InC = (day29TempF - 32) * 5 / 9;

var day2InF  = (day2TempC  * 9 / 5) + 32;
var day4InF  = (day4TempC  * 9 / 5) + 32;
var day6InF  = (day6TempC  * 9 / 5) + 32;
var day8InF  = (day8TempC  * 9 / 5) + 32;
var day10InF = (day10TempC * 9 / 5) + 32;
var day12InF = (day12TempC * 9 / 5) + 32;
var day14InF = (day14TempC * 9 / 5) + 32;
var day16InF = (day16TempC * 9 / 5) + 32;
var day18InF = (day18TempC * 9 / 5) + 32;
var day20InF = (day20TempC * 9 / 5) + 32;
var day22InF = (day22TempC * 9 / 5) + 32;
var day24InF = (day24TempC * 9 / 5) + 32;
var day26InF = (day26TempC * 9 / 5) + 32;
var day28InF = (day28TempC * 9 / 5) + 32;
var day30InF = (day30TempC * 9 / 5) + 32;

var tot_temperature_in_celsius =
  day1InC + day2TempC + day3InC + day4TempC + day5InC +
  day6TempC + day7InC + day8TempC + day9InC + day10TempC +
  day11InC + day12TempC + day13InC + day14TempC + day15InC +
  day16TempC + day17InC + day18TempC + day19InC + day20TempC +
  day21InC + day22TempC + day23InC + day24TempC + day25InC +
  day26TempC + day27InC + day28TempC + day29InC + day30TempC;

var tot_temperature_in_fahrenheit =
  day1TempF + day2InF + day3TempF + day4InF + day5TempF +
  day6InF + day7TempF + day8InF + day9TempF + day10InF +
  day11TempF + day12InF + day13TempF + day14InF + day15TempF +
  day16InF + day17TempF + day18InF + day19TempF + day20InF +
  day21TempF + day22InF + day23TempF + day24InF + day25TempF +
  day26InF + day27TempF + day28InF + day29TempF + day30InF;

var avg_temperature_in_celsius    = tot_temperature_in_celsius    / 30;
var avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

console.log("Total in Celsius: "      + tot_temperature_in_celsius);
console.log("Total in Fahrenheit: "   + tot_temperature_in_fahrenheit);
console.log("Average in Celsius: "    + avg_temperature_in_celsius);
console.log("Average in Fahrenheit: " + avg_temperature_in_fahrenheit);
