/**
 * @flow
 * @providesModule Header
 */

import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

type Props = {
  title: string
}

const Header = ({ title }: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'royalblue',
    padding: 8,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: 'white'
  }
})

export default Header
