import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  if (tasks.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No tasks yet. Add a new task!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <View style={styles.taskContainer}>
          <Text style={styles.taskText}>{item}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
  taskContainer: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  taskText: {
    fontSize: 16,
    color: '#00796b',
  },
});

export default ToDoList;
