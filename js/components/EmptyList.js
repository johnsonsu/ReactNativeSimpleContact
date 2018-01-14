/**
 * @flow
 * @providesModule EmptyList
 */

import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

type Props = {
  isLoading: boolean
}

const EmptyList = ({ isLoading }: Props) => (
  <View style={styles.container}>
    {isLoading ? (
      <ActivityIndicator />
    ) : (
      <View style={styles.container}>
        <Text style={styles.noResultText}>No Result</Text>
      </View>
    )}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noResultText: {
    fontSize: 20,
    color: 'gray'
  }
})

export default EmptyList
