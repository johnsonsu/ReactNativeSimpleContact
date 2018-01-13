/**
 * @flow
 * @providesModule VisibleContactList
 */

import { connect } from 'react-redux'
import { toggleContact } from '../actions'
import ContactList from 'ContactList'

const getVisibleContacts = (contacts, filter) => {
  switch (filter) {
    case 'SHOW_SELECTED':
      return contacts.filter
    case 'SHOW_ALL':
    default:
      return contacts
  }
}

const mapStateToProps = state => {
  return {
    contacts: getVisibleContacts(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onContactClick: id => {
      dispatch(toggleContact(id))
    }
  }
}

const VisibleContactList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactList)

export default VisibleContactList
