/**
 * @flow
 */

import type { Action } from './actionTypes'
import {
  TOGGLE_HIDE_UNSELECTED
} from './actionTypes'

export function toggleVisibility(): Action {
  return { type: TOGGLE_HIDE_UNSELECTED }
}
