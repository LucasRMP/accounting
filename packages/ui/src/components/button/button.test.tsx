import React from 'react'
import { screen, render } from '@testing-library/react'

import { Button } from './button'

describe('ui/Button', () => {
  it('should render a button element with the children passed in', () => {
    render(
      <Button>
        <div data-testid="children"></div>
      </Button>,
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByTestId('children')).toBeInTheDocument()
  })
})
