/*
 * Created Date: Sunday June 7th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
class AddTask extends Component {
  render() {
    return (
      <View>
        <TextInput placeholder="Add a new task!" style={styles.taskInput} />
        <TouchableOpacity style={styles.addTaskBtn}>
          <FontAwesomeIcon icon={faPlusCircle} size={20} />
          <Text style={styles.addTaskBtnText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  taskInput: {
    height: 60,
    padding: 8,
    fontSize: 17,
  },
  addTaskBtn: {
    backgroundColor: '#c2bad8',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 9,
    margin: 3,
  },
  addTaskBtnText: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default AddTask;
