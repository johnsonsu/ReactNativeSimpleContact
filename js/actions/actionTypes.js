/**
 * @flow
 */

import type { Contact } from '../reducers/contacts'

export const GET_CONTACTS = 'GET_CONTACTS'
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX'
export const ADD_CONTACT = 'ADD_CONTACT'
export const TOGGLE_HIDE_UNSELECTED = 'TOGGLE_HIDE_UNSELECTED'

export type Action =
  | { type: 'GET_CONTACTS' }
  | { type: 'GET_CONTACTS_SUCCESS', contacts: Array<Contact> }
  | { type: 'TOGGLE_CHECKBOX', id: string }
  | { type: 'TOGGLE_HIDE_UNSELECTED' }
  | { type: 'ADD_CONTACT', name: string }
export type Dispatch = (action: Action | ThunkAction | Array<Action>) => any
export type GetState = () => Object
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
