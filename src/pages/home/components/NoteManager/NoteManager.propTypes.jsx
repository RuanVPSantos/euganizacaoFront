import PropTypes from 'prop-types';

const NoteManagerPropTypes = {
  mainNoteContent: PropTypes.string.isRequired,
  handleMainNoteSave: PropTypes.func.isRequired,
};

export default NoteManagerPropTypes;
