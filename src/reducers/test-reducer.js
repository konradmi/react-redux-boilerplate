import { handleActions } from 'redux-actions'

import TEST from '../types'

export default handleActions({
  [TEST]: (state, action) => ({ ...state, text: action.payload }),
}, {})
