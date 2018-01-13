/**
 * @flow
 * @providesModule ContactList
 */

import React, { Component } from 'react'
import { ListView, StyleSheet } from 'react-native'
import ContactCell from 'ContactCell'

type Props = {
  data: Array<String>
}

type State = {
  dataSource: Object
}

class ContactList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data)
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={() => <ContactCell name="Johnson" number="12345678" />}
      />
    )
  }
}

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


// const ContactList = ({ contacts, onCheckBoxClick }) => (
//   <ListView
//     dataSource={contacts}
//     renderRow={() => <ContactCell name="Johnson" number="123456" onCheckBoxClick={onCheckBoxClick} /> }
//   />
// )

export default ContactList
