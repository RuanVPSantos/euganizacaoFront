import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TableCCs from './components/table/table';
import ChartTabs from './components/chartTabs/chartTabs';
import { getAllCc, updateCc } from '../../services/api';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [ccs, setCcs] = useState([]);
  const [loading, setLoading] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const fetchCcs = async () => {
    try {
      const data = await getAllCc();
      setCcs(data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setCcs([]);
      setLoading(false);
    }
  };

  const handleCcUpdate = async (id, newData) => {
    try {
      await updateCc(id, newData);
      const updatedCcs = ccs.map(cc => (cc.id === id ? { ...cc, ...newData } : cc));
      setCcs(updatedCcs);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleObservationEdit = (id, newValue) => {
    handleCcUpdate(id, { observation: newValue });
  };

  const handleLastUpdatedChange = (id, newDate) => {
    handleCcUpdate(id, { last_updated: newDate });
  };

  useEffect(() => {
    fetchCcs();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'white',
              },
              '& .Mui-selected': {
                color: 'white',
              },
              '& .MuiTab-textColorInherit': {
                opacity: 1,
              },
            }}
          >
            <Tab label="Financeiros" {...a11yProps(0)} />
            <Tab label="Pagamentos" {...a11yProps(1)} />
            <Tab label="Documentos" {...a11yProps(2)} />
            <Tab label="Demais" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TableCCs
                handleLastUpdatedChange={handleLastUpdatedChange}
                handleObservationEdit={handleObservationEdit}
                handleCcUpdate={handleCcUpdate}
                ccs={ccs}
                fetchCcs={fetchCcs}
                loading={loading}
              />
            </Grid>
            <Grid item xs={4}>
              <ChartTabs data={ccs} />
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Pagamentos
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Documentos
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Demais
        </CustomTabPanel>
      </Box>
    </ThemeProvider>
  );
}
