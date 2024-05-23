import { Typography } from '@mui/material';
import IconButton from './icon';

const style = {
    div : {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    }
}
function Upper() {
    return ( 
        <div style={style.div}>
            <IconButton />
            <Typography variant='body1'>
                Meu Mundinho
            </Typography>
      </div>
     );
}

export default Upper;