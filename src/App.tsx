import { useRef, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Canvas } from './components/Canvas/Canvas'
import { startGame } from './game/main'
import { useKeyPress } from './hooks/useKeyPress'
import { BoardConfig, DirectionInput, GameState, SnakeState } from './types'
import PubSub from 'pubsub-js'

const initialGameState = {
  gameOver: false
}

const boardConfig: BoardConfig = {
  width: 400,
  height: 400,
  boardBorder: 'black',
  boardBackground: 'white'
}

export function App () {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameState, setGameState] = useState<GameState>(initialGameState)
  const [keyPressed, setKeyPressed] = useState<DirectionInput>()

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      if (context) {
        startGame(context, boardConfig, gameState)
      }
    }
  }, [])

  useEffect(() => {
    if (gameState.gameOver) {
      console.log('gameState', gameState)
    }
  }, [gameState])

  function _handleKeyPress (code: DirectionInput) {
    setKeyPressed(code)
    PubSub.publish('KEYPRESS', code)
  }

  useKeyPress(() => _handleKeyPress(DirectionInput.right), ['ArrowRight'])
  useKeyPress(() => _handleKeyPress(DirectionInput.left), ['ArrowLeft'])
  useKeyPress(() => _handleKeyPress(DirectionInput.up), ['ArrowUp'])
  useKeyPress(() => _handleKeyPress(DirectionInput.down), ['ArrowDown'])

  PubSub.subscribe('GAMESTATE', (msg, newGameState) =>
    setGameState(newGameState)
  )

  return (
    <div>
      <div className='scoreboard-wrapper'>
        Score:<div id='scoreboard'></div>
      </div>
      <Canvas width={400} height={400} canvasRef={canvasRef} />
      <div>{keyPressed}</div>
    </div>
  )
}
