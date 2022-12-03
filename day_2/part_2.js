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
// X Lose
// Y Draw
// Z Win
const neededTool ={ 
    "A X": "Z", // Draws with Rock: Rock
    "A Y": "X", // Wisn with Rock: Paper
    "A Z": "Y", // Loses with Rock: Scissors
    "B X": "X", // Loses with Paper: Rock
    "B Y": "Y", // Draws with Paper: Paper
    "B Z": "Z", // Wins with Paper: Scissors
    "C X": "Y", // Wins with Scissors: Rock
    "C Y": "Z", // Loses with Scissors: Paper
    "C Z": "X"  //: Scissors
    } 
data.split("\n").filter(s => s !== '')
.map(e => pointsForPick[neededTool[e]] + pointsForWins[e.split(" ")[0] + " " + neededTool[e]])
.reduce((a , v) => v + a) // add values
