/**
 * @flow
 */

import Contacts from 'react-native-contacts'
import type { Contact } from '../reducers/contact'
import type { Action, ThunkAction, Dispatch } from './actionTypes'
import {
  GET_CONTACTS_SUCCESS,
  TOGGLE_CHECKBOX,
  TOGGLE_VISIBILITY
} from './actionTypes'

export function getContacts(): ThunkAction {
  return (dispatch: Dispatch) => {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.warn('contact access denied.')
      } else {
        dispatch(getContactsSuccess(contacts))
      }
    })
  }
}

function getContactsSuccess(contacts: Array<Contact>): Action {
  return {
    type: GET_CONTACTS_SUCCESS,
    contacts
  }
}

export function toggleContact(id: String) {
  return {
    type: TOGGLE_CHECKBOX,
    id
  }
}

export function toggleVisibility() {
  return { type: TOGGLE_VISIBILITY }
}
