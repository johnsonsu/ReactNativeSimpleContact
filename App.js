/**
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import VisibleContactList from 'VisibleContactList'
import AppStateController from 'AppStateController'
import VisibilityCheckBox from 'VisibilityCheckBox'
import Header from 'Header'

const App = () => (
  <View style={styles.container}>
    <Header title="Contacts" />
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
