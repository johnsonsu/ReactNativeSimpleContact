/**
 * @flow
 * @providesModule ContactCell
 */

import React from 'react'
import { View, Text, StyleSheet, PixelRatio } from 'react-native'
import ContactCellCheckBox from 'ContactCellCheckBox'
import type { Contact } from '../reducers/contacts'

type Props = {
  contact: Contact,
  onClick: (id: string) => void
}

const ContactCell = ({ contact, onClick }: Props) => (
  <View style={[styles.container, contact.isChecked ? styles.selected : null]}>
    <View>
      <Text style={styles.name}>
        {contact.givenName} {contact.familyName}
      </Text>
      {contact.phoneNumbers.map((phoneNumber, index) => (
        <Text key={index}>{phoneNumber.number}</Text>
      ))}
    </View>
    <ContactCellCheckBox
      isChecked={contact.isChecked}
      onClick={() => {
        onClick(contact.recordID)
      }}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: 'lawngreen'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default ContactCell
