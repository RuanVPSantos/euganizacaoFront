import PropTypes from 'prop-types';
import { Grid, TextField, Button } from '@mui/material';

const AddTaskField = ({ newTaskContent, setNewTaskContent, onCreateTask }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          label="Nova tarefa"
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={onCreateTask}
          color="secondary"
        >
          Adicionar Tarefa
        </Button>
      </Grid>
    </Grid>
  );
};

AddTaskField.propTypes = {
  newTaskContent: PropTypes.string.isRequired,
  setNewTaskContent: PropTypes.func.isRequired,
  onCreateTask: PropTypes.func.isRequired,
};

export default AddTaskField;
