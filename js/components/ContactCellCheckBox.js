/**
 * @flow
 * @providesModule ContactCellCheckBox
 */

import React, { Component } from 'react'
import { Platform, CheckBox, Switch } from 'react-native'

const AndroidCheckBox = ({ isChecked, onClick }) => (
  <CheckBox value={isChecked} onValueChange={onClick} />
)

const IOSCheckBox = ({ isChecked, onClick }) => (
  <Switch value={isChecked} onValueChange={onClick} />
)

const ContactCellCheckBox = Platform.select({
  ios: IOSCheckBox,
  android: AndroidCheckBox
})

export default ContactCellCheckBox
