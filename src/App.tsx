import PubSub from 'pubsub-js'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Canvas } from './components/Canvas/Canvas'
import { pubSubEvents } from './config'
import { startGame } from './game/main'
import { useKeyPress } from './hooks/useKeyPress'
import { BoardConfig, DirectionInput, GameState } from './types'

const initialGameState = {
  gameOver: false,
  score: 0
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
        PubSub.subscribe(pubSubEvents.GAMESTATE, (msg, newGameState) =>
          setGameState(newGameState)
        )
        PubSub.subscribe(pubSubEvents.SCORE, (msg, newScore) =>
          setGameState({ ...gameState, score: newScore })
        )

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
    PubSub.publish(pubSubEvents.KEYPRESS, code)
  }

  useKeyPress(() => _handleKeyPress(DirectionInput.right), ['ArrowRight'])
  useKeyPress(() => _handleKeyPress(DirectionInput.right), ['KeyD'])
  useKeyPress(() => _handleKeyPress(DirectionInput.left), ['ArrowLeft'])
  useKeyPress(() => _handleKeyPress(DirectionInput.left), ['KeyA'])
  useKeyPress(() => _handleKeyPress(DirectionInput.up), ['ArrowUp'])
  useKeyPress(() => _handleKeyPress(DirectionInput.up), ['KeyW'])
  useKeyPress(() => _handleKeyPress(DirectionInput.down), ['ArrowDown'])
  useKeyPress(() => _handleKeyPress(DirectionInput.down), ['KeyS'])

  return (
    <div id='snakeboard'>
      <div className='scoreboard'>
        <div>Score: {gameState.score}</div>
      </div>
      <Canvas width={400} height={400} canvasRef={canvasRef} />
      <div data-testid='keyPressed'>{keyPressed}</div>
    </div>
  )
}
