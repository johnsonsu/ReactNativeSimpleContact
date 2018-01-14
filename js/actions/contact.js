/**
 * @flow
 */

import Contacts from 'react-native-contacts'
import type { Contact } from '../reducers/contacts'
import type { Action, ThunkAction, Dispatch } from './actionTypes'
import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  TOGGLE_CHECKBOX,
  ADD_CONTACT
} from './actionTypes'

export function getContacts(): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch({
      type: GET_CONTACTS
    })
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.warn('contact access denied.')
      } else {
        dispatch(getContactsSuccess(contacts.reverse()))
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

export function toggleContact(id: string): Action {
  return {
    type: TOGGLE_CHECKBOX,
    id
  }
}

export function addContact(name: string): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      name
    })
    let newContact = {
      givenName: name
    }
    Contacts.addContact(newContact, (err) => {
      console.log('failed adding contact', err)
    })
    dispatch(getContacts())
  }
}
