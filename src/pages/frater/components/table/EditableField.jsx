import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton, TextField } from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon } from '@mui/icons-material';

const EditableField = ({ value, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setNewValue(tempValue);
  }, [tempValue]);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleSave = async () => {
    const previousValue = value;
    setTempValue(newValue);
    setEditing(false);

    try {
      await onSave(newValue);
    } catch (error) {
      console.error("Error saving value:", error);
      setTempValue(previousValue);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
      {editing ? (
        <>
          <TextField
            variant="standard"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <IconButton onClick={handleSave} size="small">
            <SaveIcon />
          </IconButton>
        </>
      ) : (
          <>
          <TextField
            variant="standard"
            value={tempValue}
            disabled
          />
          <IconButton onClick={toggleEditing} size="small">
            <EditIcon />
          </IconButton>
        </>
      )}
    </div>
  );
};

EditableField.propTypes = {
  value: PropTypes.string,
  onSave: PropTypes.func,
};

export default EditableField;
