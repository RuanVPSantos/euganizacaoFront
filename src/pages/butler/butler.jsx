import { Container, Grid, Box } from '@mui/material';
import CardComponent from './components/CardComponent';
import bedsLogo from './assets/BEDS LOGO.png';

export default function App() {
  return (
    <Container>
      <Box mt={4} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CardComponent
            title={"Beds & Boats"}
            link={"https://www.notion.so/Beds-Boats-471fffbf6c8d4373ad9d7458947d9549"}
            image={bedsLogo}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
