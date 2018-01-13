/**
 * @flow
 */

import type { Contact } from '../reducers/contact'

export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
export const TOGGLE_CHECKBOX = 'TOGGLE_CHEKCBOX'
export const ADD_CONTACT = 'ADD_CONTACT'
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'

export type Action =
  | { type: 'GET_CONTACTS_SUCCESS', contacts: Array<Contact> }
  | { type: 'TOGGLE_CHECKBOX', id: String }
  | { type: 'TOGGLE_VISIBILITY' }
export type Dispatch = (action: Action | ThunkAction | Array<Action>) => any
export type GetState = () => Object
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
