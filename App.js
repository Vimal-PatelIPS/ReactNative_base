import React, { Component } from 'react';
import { View, Text } from 'react-native'
import Router from 'src/router';
import { RootNavigator } from './src/router';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigator />
      </View>
    )
  }
}
