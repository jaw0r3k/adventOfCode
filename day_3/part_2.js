const charNumber = (a) => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(a) + 1
const splitIn3Teams = (result, rucksack, index) => { 
  const teamIndex = Math.floor(index / 3) // index of team
  if(!result[teamIndex]) {
    result[teamIndex] = [] // create new team
  }
  result[teamIndex].push(rucksack) // put rucksack to team
  return result
}
data.split("\n").filter(s => s !== '')
  .map(s => s.split("")) // map rucksacks to items
  .reduce(splitIn3Teams, []) // split into teams
  .map(a => a[0].find(item => a[1].includes(item) && a[2].includes(item))) // check for common badge
  .map(charNumber) // map to numbers e.g. r => 18, Z => 52
  .reduce((a, v) => v + a) // add values
