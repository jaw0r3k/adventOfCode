const pointsForPick = { 
 X: 1, // Rock
 Y: 2, // Paper
 Z: 3 // Scissors
} 
// A Rock
// B Paper
// C Scissors
const pointsForWins = { 
    "A X": 3, // Rock vs Rock: Draw
    "A Y": 6, // Rock vs Paper: Win
    "A Z": 0, // Rock vs Scissors: Lose
    "B X": 0, // Paper vs Rock: Lose
    "B Y": 3, // Paper vs Paper: Draw
    "B Z": 6, // Paper vs Scissors: Win
    "C X": 6, // Scissors vs Rock: Win
    "C Y": 0, // Scissors vs Paper: Lose
    "C Z": 3  // Scissors vs Scissors: Draw
 } 
data.split("\n").filter(s => s !== '')
// e.split(" ")[1] === My pick
.map(e => pointsForPick[e.split(" ")[1]] + pointsForWins[e])
.reduce((a , v) => v + a) // add values
