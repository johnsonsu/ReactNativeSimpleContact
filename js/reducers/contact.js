/**
 * @flow
 */

import {
  GET_CONTACTS_SUCCESS,
  TOGGLE_CHECKBOX,
  TOGGLE_VISIBILITY
} from '../actions/actionTypes'

type Contact = {
  recordID: String,
  familyName: String,
  givenName: String,
  phoneNumbers: Array<PhoneNumber>,
  isChecked: Boolean
}

type PhoneNumber = {
  label: String,
  number: String
}

type State = Array<Contact>

type Action = {
  type: String,
  id: String
}

function contacts(state: State = [], action: Action): State {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return state.map(
        contact =>
          contact.recordID === action.id
            ? { ...contact, isChecked: !contact.isChecked }
            : contact
      )
    default:
      return state
  }
}

export default contacts
