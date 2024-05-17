import { useState, useEffect } from 'react';
import { getUserTasks, createTask, updateTask, deleteTask } from '../../../services/api';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskContent, setNewTaskContent] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userTasks = await getUserTasks();
        setTasks(userTasks);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTasks();
  }, []);

  const handleCreateTask = async () => {
    if (!newTaskContent) return;

    const newTask = {
      id: Date.now(),
      content: newTaskContent,
      status: 1
    };

    const previousTasks = [...tasks];

    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTaskContent('');

    try {
      const createdTask = await createTask(newTaskContent);
      setTasks(prevTasks => prevTasks.map(task => task.id === newTask.id ? createdTask : task));
    } catch (error) {
      console.error(error.message);
      setTasks(previousTasks);
    }
  };

  const handleUpdateTask = async (taskId, updates) => {
    const previousTasks = [...tasks];
    setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? { ...task, ...updates } : task));

    try {
      const updatedTask = await updateTask(taskId, updates);
      setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? updatedTask : task));
    } catch (error) {
      console.error(error.message);
      setTasks(previousTasks);
    }
  };

  const handleDeleteTask = async (taskId) => {
    const previousTasks = [...tasks];
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));

    try {
      await deleteTask(taskId);
    } catch (error) {
      console.error(error.message);
      setTasks(previousTasks);
    }
  };

  return {
    tasks,
    newTaskContent,
    setNewTaskContent,
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask
  };
};

export default useTasks;
