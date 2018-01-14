/**
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import VisibleContactList from 'VisibleContactList'
import VisibilityCheckBox from 'VisibilityCheckBox'
import AddContactTextInput from 'AddContactTextInput'

import Header from 'Header'

const App = () => (
  <View style={styles.container}>
    <Header title="Contacts" />
    <AddContactTextInput />
    <VisibilityCheckBox />
    <VisibleContactList />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
