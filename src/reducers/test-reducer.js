import { TEST } from '../types'

export default (state={}, action) => {
  switch(action.type) {
  	case TEST:
  	  return {...state, text: action.payload}
  }
  return state
}
