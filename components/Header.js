/*
 * Created Date: Sunday June 7th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Task List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 60,
    padding: 15,
    backgroundColor: '#303f9f',
    color: 'white',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
export default Header;
