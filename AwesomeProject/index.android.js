/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import Home from '/components/home.component.js';

export default class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0}}
        renderScene={(route, navigator) =>
          <Home
            title={route.title}
            onForward = {() => {
              const nextIndex = route.index+1;
              navigator.push({
                title: 'Scene' + nextIndex,
                index: nextIndex
              });
            }}
            onBack = {() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
