import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BasicCard({ title, content }) {
  return (
    <Card sx={{ minHeight: 200, padding: '10%'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <div>
          {content}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

BasicCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired, // Alterado para PropTypes.node para aceitar elementos JSX
};

export default BasicCard;
