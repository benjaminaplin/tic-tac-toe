import { useState } from 'react'
import './App.css'
import type { SquareOptions, SquareValue } from './types';
import { Square } from './components/Square';
import { UserSelection } from './components/UserSelection';
import { calculateWin } from './utils/calculate-win';

const userValues = {
  user1: 'X',
  user2: 'O'
}

function App() {
  const [squares, setSquares] = useState<SquareOptions[]>(Array(9).fill(null));
  const [activeUserId, setActiveUserId] = useState(1)
  const [gameWinner, setGameWinner] = useState<SquareOptions | 'draw'>(null)
  const [gameStateHistory, setGameStateHistory] = useState<SquareOptions[][]>([])

  const handleSquareClick = (cellIndex: number) => {
    if(gameWinner !== null){
      return
    }
    const tempSquares = [...squares]
    setGameStateHistory((history: SquareOptions[][]) => [...history, squares])
    const value = (activeUserId === 1 ? userValues.user1 : userValues.user2) as SquareValue
    if(tempSquares[cellIndex] === null) {
      tempSquares[cellIndex] = value
    }  else{
      return
    }
    setSquares(tempSquares)
    setGameWinner(calculateWin(tempSquares))
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null))
    setGameWinner(null)
    setGameStateHistory([])
  }

  const handleUserSelection = (userId: number) => {
    setActiveUserId(userId)
  }

  const handleUndo = () => {
    const tempGameStateHistory= [...gameStateHistory];
    const prevState = tempGameStateHistory.pop()
    if(prevState){
      setSquares(prevState)
      setGameWinner(calculateWin(prevState))
    }
    setGameStateHistory(tempGameStateHistory)
    console.log("🚀 ~ handleUndo ~ prevState:", prevState)
  }

  return (
    <>
        <h1>Tic Tac Toe</h1>
        <div className='game-winner-container'>
          {gameWinner === 'draw' ? "It's a draw!!!" : gameWinner !== null ? <h2>🎉🎉🎉🎉 {gameWinner} Wins!!!!! 🎉🎉🎉🎉</h2> : null}
        </div>
        <div className='actions'>
          <div className='user-selection'>
            <UserSelection handleUserSelection={handleUserSelection} activeUserId={activeUserId} />
          </div>
          <div className='game-actions'>
            <button className='reset' onClick={handleReset}>Reset</button>
            <button disabled={gameStateHistory.length === 0} className='undo' onClick={handleUndo}>
              Undo
            </button>
          </div>
        </div>
        <div className='game-container'>
          {squares.map((sq: SquareValue, i: number) => {
            return <Square handleSquareClick={handleSquareClick} cellIndex={i} value={sq} />
          })}
        </div>
    </>
  )
}

export default App

