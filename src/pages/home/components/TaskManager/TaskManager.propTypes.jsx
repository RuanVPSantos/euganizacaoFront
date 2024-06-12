import PropTypes from 'prop-types';

const TaskManagerPropTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
  })).isRequired,
  newTaskContent: PropTypes.string.isRequired,
  setNewTaskContent: PropTypes.func.isRequired,
  handleCreateTask: PropTypes.func.isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

export default TaskManagerPropTypes;
