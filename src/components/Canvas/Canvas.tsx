import React from 'react'

interface CanvasProps {
  width: number
  height: number
  canvasRef: React.RefObject<HTMLCanvasElement>
}

export const Canvas = ({ width, height, canvasRef }: CanvasProps) => {
  //   const canvasRef = useRef<HTMLCanvasElement>(null)
  //   useEffect(() => {
  //     if (canvasRef.current) {
  //       const canvas = canvasRef.current
  //       const context = canvas.getContext('2d')
  //       if (context) {
  //         context.beginPath()
  //         context.arc(50, 50, 50, 0, 2 * Math.PI)
  //         context.fill()
  //       }
  //     }
  //   }, [])

  return <canvas ref={canvasRef} height={height} width={width} role='img' />
}
