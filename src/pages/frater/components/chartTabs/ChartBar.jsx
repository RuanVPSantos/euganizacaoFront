import PropTypes from 'prop-types';

const ChartBar = ({ name, observation, lastUpdatedDate, maxDays }) => {
  const currentDate = new Date();
  let differenceInDays = maxDays - Math.ceil((currentDate - lastUpdatedDate) / (1000 * 60 * 60 * 24));
  if (differenceInDays < 0) { differenceInDays = 0; }
  let percentFilled = (differenceInDays / maxDays) * 100;
  if (observation == "finalizado") {
    percentFilled = 100;
  }
  if (percentFilled < 0) { percentFilled = 0; }

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
      <div style={{ width: '100px', marginRight: '10px' }}>{name}</div>
      <div
        style={{
          width: '200px',
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
    </div>
  );
};

ChartBar.propTypes = {
  name: PropTypes.string.isRequired,
  observation: PropTypes.string.isRequired,
  lastUpdatedDate: PropTypes.date,
  maxDays: PropTypes.number.isRequired
};

export default ChartBar;
