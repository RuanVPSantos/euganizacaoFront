import { Grid } from '@mui/material';
import content from '../content';
import BasicCard from './BasicCard';

const MasonryGrid = () => {
  return (
    <Grid container spacing={2} justifyContent="space-around">
      {content.map((cont, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <BasicCard title={cont.title} content={cont.content} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MasonryGrid;
