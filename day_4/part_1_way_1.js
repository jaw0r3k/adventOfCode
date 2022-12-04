/**
Example number 3-76,75-75
*/
data.split("\n").filter(s => s !== '') // split and filter last element
  .map(s => s.split(",") // split by , ["3-76", "75-75"]
       .map(s => s.split("-") // split by - [["3", "76"], ["75", "75"]]
       .map(s => new Number(s)))) // map to numbers
  .filter(a =>
      ((a[0][0] >= a[1][0] && a[0][0] <= a[1][1]) && (a[0][1] >= a[1][0] && a[0][1] <= a[1][1])) // check if every number of 3-76 is in range of 75-75
          || ((a[1][0] >= a[0][0] && a[1][0] <= a[0][1]) && (a[1][1] >= a[0][0] && a[1][1] <= a[0][1]))) // check if every number of 75-75 is in range of 3-76
   .length // length of an array
