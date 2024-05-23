import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import theme from '../../../../theme';

const ChartBar = ({ maxDays, item }) => {
  const currentDate = new Date();
  let differenceInDays = maxDays - Math.ceil((currentDate - new Date(item.last_updated)) / (1000 * 60 * 60 * 24));
  if (differenceInDays < 0) { differenceInDays = 0; }
  let percentFilled = (differenceInDays / maxDays) * 100;
  if (item.observation === "finalizado") {
    percentFilled = 100;
  }

  return (
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="body1" noWrap style={{ color: theme.palette.text.primary }}>
            {item.name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <div
            style={{
              width: '100%',
              height: '20px',
              backgroundColor: theme.palette.background.paper,
              borderRadius: '10px',
              position: 'relative',
            }}
            title={`Dias desde a última atualização: ${maxDays - differenceInDays} dias`}
          >
            <div
              style={{
                width: `${percentFilled}%`,
                height: '100%',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '10px',
              }}
            />
          </div>
        </Grid>
      </Grid>
  );
};

ChartBar.propTypes = {
  maxDays: PropTypes.number.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    last_updated: PropTypes.string.isRequired,
    observation: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChartBar;
