/*
 * Created Date: Sunday June 7th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

class Header extends Component {
  render() {
    const {deleteAllTasks} = this.props;
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Task List</Text>
        <TouchableOpacity style={styles.clearTaskBtn} onPress={deleteAllTasks}>
          <Text style={styles.clearTaskBtnText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 60,
    backgroundColor: '#303f9f',
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  clearTaskBtn: {
    height: 30,
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100 / 5,
  },
  clearTaskBtnText: {
    color: 'white',
    textAlign: 'center',
  },
});
export default Header;
