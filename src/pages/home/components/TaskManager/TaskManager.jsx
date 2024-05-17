import TaskList from '../TaskList/TaskList';
import TaskManagerPropTypes from './TaskManager.propTypes';

const TaskManager = ({ tasks, newTaskContent, setNewTaskContent, handleCreateTask, handleUpdateTask, handleDeleteTask }) => {
  return (
    <TaskList
      tasks={tasks}
      newTaskContent={newTaskContent}
      setNewTaskContent={setNewTaskContent}
      onCreateTask={handleCreateTask}
      onUpdateTask={handleUpdateTask}
      onDeleteTask={handleDeleteTask}
    />
  );
};

export default TaskManager;

TaskManager.propTypes = TaskManagerPropTypes;