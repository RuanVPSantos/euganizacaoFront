import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import ReactMarkdown from 'react-markdown';
import { Grid, Switch, Paper } from '@mui/material';
import './markdownEditorDark.css';

const mdParser = new MarkdownIt();

const MarkdownEditor = ({ initialContent, onSave }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  const handleEditorChange = ({ text }) => {
    setContent(text);
  };

  const toggleMode = async () => {
    if (isEditMode) {
      await onSave(content);
    }
    setIsEditMode(!isEditMode);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Switch
          checked={isEditMode}
          onChange={toggleMode}
          name="editModeSwitch"
          inputProps={{ 'aria-label': 'toggle edit mode' }}
        />
      </Grid>
      <Grid item xs={12}>
        {isEditMode ? (
          <MdEditor
            value={content}
            style={{ height: '500px' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
        ) : (
          <Paper elevation={3} style={{ padding: '16px' }}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

MarkdownEditor.propTypes = {
  initialContent: PropTypes.string,
  onSave: PropTypes.func.isRequired,
};

MarkdownEditor.defaultProps = {
  initialContent: '',
};

export default MarkdownEditor;
