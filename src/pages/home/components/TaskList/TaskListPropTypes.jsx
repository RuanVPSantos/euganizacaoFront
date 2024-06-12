// src/components/TaskList/TaskListPropTypes.js
import PropTypes from 'prop-types';

export const taskListPropTypes = {
  tasks: PropTypes.array.isRequired,
  newTaskContent: PropTypes.string.isRequired,
  setNewTaskContent: PropTypes.func.isRequired,
  onCreateTask: PropTypes.func.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
