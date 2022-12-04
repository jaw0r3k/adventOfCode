const range = ([start, end]) =>
  Array.from(
    Array(parseInt(end) - parseInt(start) + 1),
    (_, i) => parseInt(start) + i
  ) // array of all numbers in the range

document.body.textContent.split("\n").filter(s => s !== '') // split and filter last element
  .map(s => s.split(",") // split by "," => ["3-76", "75-75"]
       .map(s => range(s.split("-")) // split by "-" => [["3", "76"], ["75", "75"]] and convert to range => [[3, 4, 5, 6, ..., 75, 76], [75]]
       ))
  .filter(a => a[0].every(b => a[1].includes(b) || a[1].every(b => a[0].includes(b))) // filter if in one of the arrays in the range of the other
  .length // length of an array
