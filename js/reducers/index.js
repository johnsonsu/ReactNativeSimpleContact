/**
 * @flow
 */

import { combineReducers } from 'redux'
import contacts from './contacts'
import visibility from './visibility'

const contactApp = combineReducers({
  contacts,
  visibility
})

export default contactApp
