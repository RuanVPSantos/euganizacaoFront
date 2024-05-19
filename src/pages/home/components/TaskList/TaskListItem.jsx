import { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, IconButton, Grid, Select, MenuItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';

const statusIcons = {
  1: <ScheduleIcon />,
  2: <CheckCircleOutlineIcon />,
  3: <ArchiveIcon />
};

const statusMapping = {
  1: "Em andamento",
  2: "Concluída",
  3: "Arquivada"
};

const TaskListItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const [editMode, setEditMode] = useState(false);

  const handleStatusChange = (event) => {
    setEditMode(false);
    onUpdateTask(task.id, { status: event.target.value });
  };
  return (
    <ListItem key={task.id} dense>
      <Grid container alignItems="center">
        <Grid item xs={2}>
          <Typography variant="body1" color="#f2ecff">
            {statusIcons[task.status]}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <ListItemText>
            <Typography
              variant="body1" 
              color="#f2ecff" 
              component="div" 
              sx={{ 
                textDecoration: task.status === 2 ? 'line-through' : 'none' 
              }}
            >
              {task.content}
            </Typography>
          </ListItemText>
        </Grid>
        <Grid item xs={2}>
          <IconButton 
            aria-label="edit" 
            onClick={() => setEditMode(!editMode)}
            sx={{ bgcolor: editMode ? '#37474f' : 'transparent' }}
          >
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTask(task.id)}>
            <DeleteIcon />
          </IconButton>
        </Grid>
        {editMode && (
          <Grid item xs={12}>
            <Select
              fullWidth
              value={task.status}
              onChange={handleStatusChange}
              sx={{ mt: 2 }}
            >
              {Object.entries(statusMapping).map(([value, label]) => (
                <MenuItem key={value} value={parseInt(value)}>
                  <Typography variant="body2">
                    {label}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </Grid>
        )}
      </Grid>
    </ListItem>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskListItem;
