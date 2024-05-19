import PropTypes from 'prop-types';
import ChartBar from './ChartBar';

const MonthlyChart = ({ data, maxDays }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {data.map(item => {
                return (
                    <ChartBar key={item.id} item={item} maxDays={maxDays}/>
                );
            })}
        </div>
    );
};

MonthlyChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    maxDays: PropTypes.number.isRequired
};

export default MonthlyChart;
