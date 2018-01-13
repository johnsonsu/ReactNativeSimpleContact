/**
 * @flow
 * @providesModule ContactCell
 */

import React from 'react'
import { View, Text, StyleSheet, PixelRatio } from 'react-native'
import CheckBox from 'CheckBox'

type Props = {
  name: String,
  number: String,
  onCheckBoxClick: Function
}

const ContactCell = ({ name, number, onCheckBoxClick }: Props) => (
  <View style={styles.container}>
    <Text>{name}</Text>
    <Text>{number}</Text>
    <CheckBox isChecked={true} onClick={onCheckBoxClick} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1 / PixelRatio.get()
  }
})

export default ContactCell
