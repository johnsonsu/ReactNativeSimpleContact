/**
 * @flow
 * @providesModule VisibleContactList
 */

import { connect } from 'react-redux'
import { getContacts, toggleContact } from '../actions'
import ContactList from 'ContactList'

const getVisibleContacts = (contacts, hideUnselected) => {
  if (hideUnselected) {
    return contacts.filter(contact => contact.isChecked)
  } else {
    return contacts
  }
}

const mapStateToProps = state => {
  return {
    contacts: getVisibleContacts(state.contacts, state.visibility.hideUnselected)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getContacts: () => {
      dispatch(getContacts())
    },
    onContactClick: id => {
      dispatch(toggleContact(id))
    }
  }
}

const VisibleContactList = connect(mapStateToProps, mapDispatchToProps)(
  ContactList
)

export default VisibleContactList
