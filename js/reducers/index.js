/**
 * @flow
 */

import { combineReducers } from 'redux'
import * as contactReducers from './contact'

const contactApp = combineReducers(contactReducers)

export default contactApp
