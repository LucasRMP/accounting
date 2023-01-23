import React from 'react'
import { render, screen } from '@testing-library/react'
import { HelloWorld } from '.'

describe('HelloWorld', () => {
  it('should render successfully', () => {
    render(<HelloWorld />)

    expect(screen.getByTestId('title')).toBeInTheDocument()
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
