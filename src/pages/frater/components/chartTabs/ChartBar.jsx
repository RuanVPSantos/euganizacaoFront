import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

const ChartBar = ({ name, observation, lastUpdatedDate, maxDays }) => {
  const currentDate = new Date();
  let differenceInDays = maxDays - Math.ceil((currentDate - new Date(lastUpdatedDate)) / (1000 * 60 * 60 * 24));
  if (differenceInDays < 0) { differenceInDays = 0; }
  let percentFilled = (differenceInDays / maxDays) * 100;
  if (observation === "finalizado") {
    percentFilled = 100;
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={4} md={3}>
        <Typography variant="body1" noWrap>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <div
          style={{
            width: '100%',
            height: '20px',
            backgroundColor: '#424242',
            borderRadius: '10px',
            position: 'relative',
          }}
          title={`Dias desde a última atualização: ${maxDays - differenceInDays}`}
        >
          <div
            style={{
              width: `${percentFilled}%`,
              height: '100%',
              backgroundColor: '#1976D2',
              borderRadius: '10px',
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

ChartBar.propTypes = {
  name: PropTypes.string.isRequired,
  observation: PropTypes.string.isRequired,
  lastUpdatedDate: PropTypes.string.isRequired,
  maxDays: PropTypes.number.isRequired,
};

export default ChartBar;
