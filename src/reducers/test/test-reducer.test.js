import testReducer from '../test-reducer'
import TEST from '../../types'

describe('test-reducer', () => {
  it('should return an empty object as an initial state', () => {
    expect(testReducer(undefined, {})).toEqual({})
  })

  it('should handle TEST', () => {
    const action = {
      type: TEST,
      payload: 'test',
    }
    expect(testReducer(undefined, action)).toEqual({ text: 'test' })
  })
})
