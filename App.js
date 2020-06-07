import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  content,
  SafeAreaView,
  FlatList,
  Text,
} from 'react-native';
import Header from './components/Header';
import uuid from 'uuid-random';
import TaskListItem from './components/TaskListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: uuid(), content: 'Finish up projects!'},
        {id: uuid(), content: 'Attend reviews'},
        {id: uuid(), content: 'Finish house chores'},
        {id: uuid(), content: 'Feed the cat!'},
      ],
    };
  }

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return task.id !== id;
      }),
    });
  };

  render() {
    const {tasks} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Header />
          <FlatList
            data={tasks}
            renderItem={({item}) => (
              <TaskListItem task={item} deleteTask={this.deleteTask} />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
