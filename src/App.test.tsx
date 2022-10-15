import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('should have expected components', () => {
    render(<App />)
    expect(screen.getByText('Score: 0')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByTestId('keyPressed')).toBeInTheDocument()
  })
})
