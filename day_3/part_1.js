const charNumber = (a) => "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(a)
data.split("\n").filter(s => s !== '') // split and filter last element
 .map(s => [s.slice(0, s.length / 2), s.slice(s.length / 2)].map(s => s.split(""))) // spliting in two halfs
 .map(a => a[0].find(b => a[1].includes(b))) // find common item
 .map(charNumber) // map to numbers e.g. p => 16, L => 38
 .reduce((a, v) => v + a) // add all values
