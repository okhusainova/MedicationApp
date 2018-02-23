import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm/index';
import * as loginAction from '../actions/loginAction.js';

class MedApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <SignIn />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),

  (dispatch) => ({
    actions: bindActionCreators(loginActions, dispatch)
  })
)(MedApp);