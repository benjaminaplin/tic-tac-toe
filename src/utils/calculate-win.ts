import type { SquareOptions } from "../types"


export const calculateWin = (squares: SquareOptions[]): SquareOptions | 'draw'=> {
  // Define all possible winning combinations
  const winningSequences = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6]  // diagonal top-right to bottom-left
  ];

  // Check each winning sequence
  for (const sequence of winningSequences) {
    const [a, b, c] = sequence;
    
    // Check if all squares in sequence have the same non-null value
    if (
      squares[a] !== null &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a]; // Return the winning symbol ('x' or 'o')
    }
  }
  if(squares.every((sq) => sq !== null)) {      
    return 'draw' // Return draw if all squares are filled
  }
  return null; // No winner
}