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
  constructor(props) {
    super(props);
    this.state = {
      taskInput: '',
    };
  }
  onChange = (input) => {
    this.setState({taskInput: input});
  };
  render() {
    const {addTask} = this.props;
    const {taskInput} = this.state;
    return (
      <View>
        <TextInput
          placeholder="Add a new task!"
          style={styles.taskInput}
          onChangeText={this.onChange}
        />
        <TouchableOpacity
          style={styles.addTaskBtn}
          onPress={() => addTask(taskInput)}>
          <FontAwesomeIcon icon={faPlusCircle} size={20} color="#303f9f" />
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
    backgroundColor: '#c5cae9',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 9,
    margin: 3,
  },
  addTaskBtnText: {
    color: '#1a237e',
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default AddTask;
