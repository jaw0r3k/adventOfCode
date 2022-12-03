data.split("\n\n") // split into elfs
  .map(e => 
     e.split("\n") // split for food calorries
    .map(n => new Number(n)) // convert calorries strng to number
    .reduce((a, v) => a + v)) // add calorries for specific elf
  .sort((a, b) => b-a) // sort to get the most of callories
  .slice(0, 3) // get first 3 elfs
  .reduce((a, v) => a + v) // add values
