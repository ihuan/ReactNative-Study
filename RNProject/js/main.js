/**
 * 章节: 06-04
 * 定义加载的主页面组件 MainComponent
 * FilePath: /06-04/NavigatorIOSComponent/main.js
 * @Parry
 */

import React, {Component} from 'react'
import {StyleSheet, NavigatorIOS, View, Text} from 'react-native'
import DetailsComponent from "./details"

class MainComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }

  gotoDetailsPage() {
    this.props.navigator.push({
        title: '详情页面',
        component: DetailsComponent,
        passProps: {
          name: 'React'
        }
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

module.exports = MainComponent