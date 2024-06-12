import { Grid, List } from '@mui/material';
import { taskListPropTypes } from './TaskListPropTypes';
import TaskListItem from './TaskListItem';
import AddTaskField from './AddTaskField';

const TaskList = ({ tasks, newTaskContent, setNewTaskContent, onCreateTask, onUpdateTask, onDeleteTask }) => {
  const filteredTasks = tasks.filter(task => task.status !== 3);

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (a.status === b.status) {
      return 0;
    } else if (a.status === 1 && b.status === 2) {
      return -1;
    } else {
      return 1;
    }
  });

  const handleCreateTask = async () => {
    try {
      await onCreateTask(newTaskContent);
      setNewTaskContent('');
    } catch (error) {
      console.error('Erro ao criar a nova tarefa:', error);
      
      onUpdateTask(sortedTasks);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await onDeleteTask(taskId);
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
      
      onUpdateTask(sortedTasks);
    }
  };

  return (
    <Grid container mt={2}>
      <Grid item xs={12}>
        <AddTaskField
          newTaskContent={newTaskContent}
          setNewTaskContent={setNewTaskContent}
          onCreateTask={handleCreateTask}
        />
      </Grid>
      <Grid item xs={12}>
        <List>
          {sortedTasks.map(task => (
            <TaskListItem
              key={task.id}
              task={task}
              onUpdateTask={onUpdateTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

TaskList.propTypes = taskListPropTypes;

export default TaskList;
