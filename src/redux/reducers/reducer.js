import baseReducer from './baseReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  base: baseReducer
})