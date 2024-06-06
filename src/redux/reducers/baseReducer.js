import { SET_READY } from '../constants'
import createReducer from '../utils/createReducer'

const initialState = {
  ready: false
}

export default function baseReducer(state = initialState, action) {
  switch (action.type) {
    case SET_READY: {
      const { ready } = action
      return createReducer(state, { ready })
    }
  
    default: { return state }
  }
}