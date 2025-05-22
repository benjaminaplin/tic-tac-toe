import type { SquareOptions } from "../types"

type SquareProps = {
  cellIndex: number,
  value: SquareOptions, 
  handleSquareClick: (cellIndex: number) => void
}

export const Square = ({cellIndex, value, handleSquareClick}: SquareProps) => (
   <div
        className='cell'
        onClick={() => handleSquareClick(cellIndex)}
        data-testid={`square-${cellIndex}`}
    >
        {value}
    </div>
)