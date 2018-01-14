/**
 * @flow
 */

import type { Action } from '../actions/actionTypes'
import { TOGGLE_HIDE_UNSELECTED } from '../actions/actionTypes'

type State = {
  hideUnselected: boolean
}

const initialState = {
  hideUnselected: false
}

const visibility = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case TOGGLE_HIDE_UNSELECTED:
      return {
        hideUnselected: !state.hideUnselected
      }
    default:
      return state
  }
}

export default visibility
