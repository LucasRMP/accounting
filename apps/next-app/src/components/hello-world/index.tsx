import React from 'react'
import { Button } from 'ui'

interface HelloWorldProps {}

export const HelloWorld: React.FC<HelloWorldProps> = ({}) => {
  return (
    <div>
      <h1 data-testid="title">Title</h1>
      <Button>Hello World</Button>
    </div>
  )
}
