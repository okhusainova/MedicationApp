import React, { Component, Navigator } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import ReactNativeRouter, { Route, Schema } from 'react-native-router-flux';

import * as reducers from '../reducers/login';
import medApp from './medApp';
import SignIn from './SignIn';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
const Router = connect()(ReactNativeRouter.Router);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
            <Router hideNavBar={true}>
                <Schema
                  name="default"
                  sceneConfig={Navigator.SceneConfigs.FloatFromRight}
                />
                <Route
                  name="signIn"
                  component={SignIn}
                  initial={true}
                  wrapRouter={true}
                  title="SignIn"
                />
              </Router>
       </Provider>
    );
  }
}