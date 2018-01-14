/**
 * @flow
 * @providesModule VisibilityCheckBox
 */

import React from 'react'
import { connect } from 'react-redux'
import ContactCellCheckBox from 'ContactCellCheckBox'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { toggleVisibility } from '../actions/visibility'

type Props = {
  isChecked: boolean,
  onClick: () => void
}

const VisibilityCheckBox = ({ isChecked, onClick }: Props) => (
  <View style={styles.container}>
    <Text>Hide Unselected</Text>
    <ContactCellCheckBox isChecked={isChecked} onClick={onClick} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: Platform.select({
      ios: 40,
      android: 30
    }),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'gainsboro',
    paddingHorizontal: 8
  }
})

const mapStateToProps = state => {
  return {
    isChecked: state.visibility.hideUnselected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(toggleVisibility())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityCheckBox)
