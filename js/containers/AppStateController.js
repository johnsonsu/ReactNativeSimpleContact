/**
 * @flow
 * @providesModule AppStateController
 */

import React, { Component } from 'react'
import { AppState, Text } from 'react-native'
import { connect } from 'react-redux'
import { getContacts } from '../actions'

type Props = {
  getContacts: () => void
}

class AppStateController extends Component<Props> {

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange)
  }

  _handleAppStateChange = nextAppState => {
    if (nextAppState === 'active') {
      this.props.getContacts()
    }
  }

  render() {
    return null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getContacts: () => {
      dispatch(getContacts())
    }
  }
}

export default connect(null, mapDispatchToProps)(AppStateController)
