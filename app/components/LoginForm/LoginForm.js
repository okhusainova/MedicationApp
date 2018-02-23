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

import { Actions } from 'react-native-router-flux';

import style from './styles'


export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      emailPlaceholder: 'Email'
    }

     this.onEmailChange = this.onEmailChange.bind(this);
  }

  validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
       
  onEmailChange(e) {
    var val = e;
    var valid = this.validateEmail(val);
    this.setState({email: val, isValid: valid});
  }


  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <TextInput
          style = {style.loginField}
          keyboardType='email-address'
          placeholder ={this.state.emailPlaceholder}
          onChangeText={this.onEmailChange}
          value = {this.state.email}
          onBlur={() => {
            if (!this.state.isValid) this.setState({email: '', emailPlaceholder: 'Incorrect Password!'})
          }}
        />
        <TextInput
          style = {style.loginField}
          placeholder = 'Password'
          onChangeText = {value => this.setState({password: value.trim()})}
          value = {this.state.password}
          password='true'
        />
      <Button title='Sign In' buttonStyle={style.button} onPress={Actions.login}/>
      </View>
    );
  }
}
