import PropTypes from 'prop-types';
import ChartBar from './ChartBar';

const BiWeeklyChart = ({ data, maxDays }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {data.map(item => {
                let observation = data.observation
                if (observation == undefined) {
                    observation = ""
                }
                const lastUpdatedDate = new Date(item.last_updated);
                return (
                    <ChartBar key={item.id} name={item.name} observation={observation} maxDays={maxDays} lastUpdatedDate={lastUpdatedDate} />
                );
            })}
        </div>
    );
};

BiWeeklyChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    maxDays: PropTypes.number.isRequired
};

export default BiWeeklyChart;
