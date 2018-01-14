/**
 * @flow
 * @providesModule AddContactTextInput
 */

import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addContact } from '../actions/contact'

type State = {
  name: string
}

type Props = {
  addContact: (name: string) => void
}

class AddContactTextInput extends Component<Props, State> {
  state: State = { name: '' }
  textInput: TextInput

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref={input => { this.textInput = input }}
          style={styles.input}
          onChangeText={text => this.setState({ name: text })}
          onSubmitEditing={() => {
            this.props.addContact(this.state.name)
            this.setState({ name: '' })
            this.textInput.clear()
          }}
          placeholder="Add Contact"
          returnKeyType="done"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'royalblue',
    padding: 8
  },
  input: {
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    textAlign: 'center'
  }
})

function mapDispatchToProps(dispatch) {
  return {
    addContact: (name: string) => dispatch(addContact(name))
  }
}

export default connect(null, mapDispatchToProps)(AddContactTextInput)
