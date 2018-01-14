/**
 * @flow
 * @providesModule ContactList
 */

import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ContactCell from 'ContactCell'
import type { Contact } from '../reducers/contacts'
import EmptyList from 'EmptyList';

import { connect } from 'react-redux'
import { getContacts, toggleContact } from '../actions'

type Props = {
  contacts: Array<Contact>,
  getContacts: () => void,
  onContactClick: (id: string) => void
}

class ContactList extends Component<Props> {
  componentDidMount() {
    this.props.getContacts()
  }

  _keyExtractor = (item: Contact) => item.recordID;

  _renderItem = ({ item }: { item: Contact }) => (
    <ContactCell contact={item} onClick={this.props.onContactClick} />
  )

  _renderEmptyList = () => <EmptyList isLoading={ !Array.isArray(this.props.contacts) } />;

  render() {
    return (
      <FlatList
        data={this.props.contacts}
        renderItem={this._renderItem}
        ListEmptyComponent={this._renderEmptyList}
        initialNumToRender={10}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}

export default ContactList
