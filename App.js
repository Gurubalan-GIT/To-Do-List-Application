import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  content,
  SafeAreaView,
  FlatList,
  Text,
  Alert,
  ScrollView,
} from 'react-native';
import Header from './components/Header';
import uuid from 'uuid-random';
import TaskListItem from './components/TaskListItem';
import AddTask from './components/AddTask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{id: uuid(), content: 'Sample task'}],
    };
  }

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return task.id !== id;
      }),
    });
  };

  deleteAllTasks = () => {
    this.setState({
      tasks: [],
    });
  };

  addTask = (task) => {
    if (!task) {
      Alert.alert(
        'Error',
        'Please enter some valid task',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: true},
      );
    } else {
      this.setState((prevState) => ({
        tasks: [{id: uuid(), content: task}, ...prevState.tasks],
      }));
    }
  };

  render() {
    const {tasks} = this.state;
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View>
            <Header deleteAllTasks={this.deleteAllTasks} />
            <AddTask addTask={this.addTask} />
            {tasks.length ? (
              <FlatList
                data={tasks}
                renderItem={({item}) => (
                  <TaskListItem task={item} deleteTask={this.deleteTask} />
                )}
              />
            ) : (
              <Text style={styles.noTasksText}>
                Add a task and get started!
              </Text>
            )}
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noTasksText: {
    display: 'flex',
    marginTop: 50,
    fontSize: 18,
    textAlign: 'center',
    color: '#e91e63',
  },
});

export default App;
