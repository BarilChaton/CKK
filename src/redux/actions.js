import { SET_READY } from './constants'

export function setReady(ready) {
  return { type: SET_READY, ready }
}

export function dispatch(type, params) {
  return { type, params }
}