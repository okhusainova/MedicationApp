import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import style from './styles'


class LoginField extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <TextInput
        style = {style.loginField}
        placeholder = {this.props.name}
        onChangeText = {(text) => this.setState({text})}
        value = {this.state.text}
      />
    );
  }
}

export default class LoginForm extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <LoginField name='email' />
        <LoginField name='password' />
        <Button title='Sign In' buttonStyle={style.button} />
      </View>
    );
  }
}
