import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import EditableField from './EditableField';

const TableCCs = ({ handleLastUpdatedChange, handleObservationEdit, ccs, loading }) => {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="CCs Table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Prioridade</TableCell>
            <TableCell align="center">Observation</TableCell>
            <TableCell align="center">Last Updated</TableCell>
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
              <TableRow key={cc.id}>
                <TableCell align="center">{cc.name}</TableCell>
                <TableCell align="center" style={{ maxWidth: '20px' }}>{cc.prioridade}</TableCell>
                <TableCell align="center" style={{ maxWidth: '100px' }}>
                  <EditableField value={cc.observation} onSave={(newValue) => handleObservationEdit(cc.id, newValue)} />
                </TableCell>
                <TableCell align="center">
                  <input
                    type='date'
                    value={cc.last_updated}
                    onChange={(e) => handleLastUpdatedChange(cc.id, e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
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
