/**
 * @flow
 */

import {
  GET_CONTACTS_SUCCESS,
  TOGGLE_CHECKBOX
} from '../actions/actionTypes'
import type { Action } from '../actions/actionTypes'

export type Contact = {
  recordID: string,
  familyName: string,
  givenName: string,
  phoneNumbers: Array<PhoneNumber>,
  isChecked: boolean
}

type PhoneNumber = {
  label: string,
  number: string
}

type State = ?Array<Contact>

function contacts(state: State = null, action: Action): State {
  switch (action.type) {
    case GET_CONTACTS_SUCCESS:
      return action.contacts.map(
        contact => ({ ...contact, isChecked: false })
      )
    case TOGGLE_CHECKBOX:
      if (state) {
        return  state.map(
          contact =>
            contact.recordID === action.id
              ? { ...contact, isChecked: !contact.isChecked }
              : contact
        )
      }
    default:
      return state
  }
}

export default contacts
