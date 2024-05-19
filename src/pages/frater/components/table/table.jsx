import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import EditableField from './EditableField';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1c1c1c',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#b0b0b0',
    },
  },
});

const TableCCs = ({ handleLastUpdatedChange, handleObservationEdit, ccs, loading }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table aria-label="CCs Table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ color: theme.palette.text.primary }}>Name</TableCell>
              <TableCell align="center" style={{ color: theme.palette.text.primary }}>Prioridade</TableCell>
              <TableCell align="center" style={{ color: theme.palette.text.primary }}>Observation</TableCell>
              <TableCell align="center" style={{ color: theme.palette.text.primary }}>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (
              ccs.map((cc) => (
                <TableRow key={cc.id} style={{ backgroundColor: theme.palette.background.paper }}>
                  <TableCell align="center" style={{ color: theme.palette.text.primary }}>{cc.name}</TableCell>
                  <TableCell align="center" style={{ color: theme.palette.text.primary, maxWidth: '20px' }}>{cc.prioridade}</TableCell>
                  <TableCell align="center" style={{ color: theme.palette.text.primary, maxWidth: '100px' }}>
                    <EditableField value={cc.observation} onSave={(newValue) => handleObservationEdit(cc.id, newValue)} />
                  </TableCell>
                  <TableCell align="center" style={{ color: theme.palette.text.primary }}>
                    <input
                      type='date'
                      value={cc.last_updated}
                      onChange={(e) => handleLastUpdatedChange(cc.id, e.target.value)}
                      style={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        border: 'none',
                        borderRadius: '4px',
                        padding: '5px',
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

TableCCs.propTypes = {
  handleLastUpdatedChange: PropTypes.func.isRequired,
  handleObservationEdit: PropTypes.func.isRequired,
  ccs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    prioridade: PropTypes.number.isRequired,
    observation: PropTypes.string,
    last_updated: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TableCCs;
