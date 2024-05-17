// components/LoadingSkeleton.jsx
import { Grid, Skeleton } from '@mui/material';

const LoadingSkeleton = () => (
  Array.from(Array(3).keys()).map(index => (
    <Grid item xs={12} key={index}>
      <Skeleton variant="rectangular" sx={{ height: 40, width: 100 }}/>
      {Array.from(Array(3).keys()).map(index => (
        <Grid container spacing={2} mt={1} key={index}>
          {Array.from(Array(3).keys()).map(index => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Skeleton variant="rectangular" sx={{ height: 220 }} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  ))
);

export default LoadingSkeleton;
