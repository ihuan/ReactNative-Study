/**
 * 章节: 06-02
 * App.js 定义
 * FilePath: /06-02/ViewComponent/App.js
 * @Parry
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default class App1 extends Component {
  render() {
    return (
      <View style={styles.rootView} onLayout={this.onLayout}>
        <View style={styles.viewOne}></View>
        <View style={styles.viewTwo}></View>
      </View>
    )
  }

  onLayout = event => {
    let {width, height} = event.nativeEvent.layout
    console.log("view width: "+ width);
    console.log("view height: "+ height);
  }

}

const styles = StyleSheet.create({
  rootView: {
    flexDirection: 'row',
    height: 100,
    marginTop: 88
  },
  viewOne: {
    backgroundColor: 'blue',
    flex: 0.4
  },
  viewTwo: {
    backgroundColor: 'red',
    flex: 0.6
  }
})