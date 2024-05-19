import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';
import WeeklyChart from './weeklyChart';
import BiWeeklyChart from './biWeeklyChart';
import MonthlyChart from './moonthlyChart';

const ChartTabs = ({ data }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Semanal" />
        <Tab label="Quinzenal" />
        <Tab label="Mensal" />
      </Tabs>
      <div style={{ width: '100%', marginTop : '1em' }}>
        {value === 0 && <WeeklyChart data={data} maxDays={7}/>}
        {value === 1 && <BiWeeklyChart data={data} maxDays={14}/>}
        {value === 2 && <MonthlyChart data={data} maxDays={30}/>}
      </div>
    </div>
  );
};

ChartTabs.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ChartTabs;
