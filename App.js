/**
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import VisibleContactList from 'VisibleContactList'

// export default class App extends Component<{}> {
//   render() {
//
//     return (
//       <View style={styles.container}>
//         <ContactsListView data={['a', 'b', 'c', 'd']} />
//       </View>
//     )
//   }
// }
const App = () => (
  <View style={styles.container}>
    <VisibleContactList contacts={['a', 'b', 'c', 'd']} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
