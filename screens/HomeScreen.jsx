import React, { useState } from 'react';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() === '' || tasks.includes(taskText)) return;
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};

export default HomeScreen;
