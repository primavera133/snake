import { useRef, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Canvas } from './components/Canvas/Canvas'
import { startGame } from './game/main'

export function App () {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      if (context) {
        startGame(context)
      }
    }
  }, [])

  return (
    <div>
      <div className='scoreboard-wrapper'>
        Score:<div id='scoreboard'></div>
      </div>
      <Canvas width={400} height={400} canvasRef={canvasRef} />
    </div>
  )
}
