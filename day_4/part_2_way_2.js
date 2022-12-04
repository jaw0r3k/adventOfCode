const range = ([start, end]) =>
  Array.from(
    Array(parseInt(end) - parseInt(start) + 1),
    (_, i) => parseInt(start) + i
  ) // array of all numbers in the range

document.body.textContent.split("\n").filter(s => s !== '') // split and filter last element
  .map(s => s.split(",") // split by "," => ["3-76", "75-75"]
       .map(s => range(s.split("-")) // split by "-" => [["3", "76"], ["75", "75"]] and convert to range => [[3, 4, 5, 6, ..., 75, 76], [75]]
       ))
  .filter(a => a[0].some(b => a[1].includes(b))) // filter if in both arrays is the same number
  .length // length of an array
