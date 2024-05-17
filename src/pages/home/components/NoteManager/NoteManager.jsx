import { Grid, Skeleton } from '@mui/material';
import MarkdownEditor from '../MarkdownEditor/MarkdownEditor';
import NoteManagerPropTypes from './NoteManager.propTypes';

const NoteManager = ({ mainNoteContent, handleMainNoteSave }) => {
  return (
    <Grid item xs={12} md={4}>
      {mainNoteContent ? (
        <MarkdownEditor initialContent={mainNoteContent} onSave={handleMainNoteSave} />
      ) : (
        <Skeleton variant="rectangular" sx={{ height: 120, width: 300 }}/>
      )}
    </Grid>
  );
};

export default NoteManager;

NoteManager.propTypes = NoteManagerPropTypes;
