/*
 * Created Date: Sunday June 7th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

class TaskListItem extends Component {
  render() {
    const {task, deleteTask} = this.props;
    return (
      <TouchableOpacity style={styles.taskContainer}>
        <View style={styles.taskItemWrapper}>
          <Text style={styles.taskItemText}>{task.content}</Text>
          <FontAwesomeIcon
            icon={faTimesCircle}
            size={26}
            color="#ef5350"
            onPress={() => deleteTask(task.id)}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  taskContainer: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  taskItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskItemText: {
    fontSize: 18,
  },
});

export default TaskListItem;
