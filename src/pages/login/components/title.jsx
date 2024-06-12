import { Typography } from '@mui/material';

function Title(props) {
    return ( 
        <div>
            <Typography variant='h6'>
                {props.content}
            </Typography>
      </div>
     );
}

export default Title;