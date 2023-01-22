import { add } from './add'

describe('add', () => {
  it('should be a function', () => {
    expect(add).toBeInstanceOf(Function)
  })

  it('should add two numbers', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
