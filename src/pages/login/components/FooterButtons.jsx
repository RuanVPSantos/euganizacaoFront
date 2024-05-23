import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
    div : {
        width: '100%',
        display: 'flex',
        gap: '5%',
        justifyContent: 'space-between'
    },
    button : {
        width: '40%'
    }
}
function FooterButtons(props) {
    return ( 
        <div style={style.div}>
            {props.buttons.map(element => {
                if (element.type == "link") {
                    return (
                        <Link to={element.refer} key={element.key}>
                            <Button variant='contained' color={element.color} fullWidth={element.fullWidth}>
                                Registre-se
                            </Button>
                        </Link>
                    )
                } else {
                    return (
                        <Button key={element.key} variant='contained' onClick={element.onClickHandler} color={element.color} fullWidth={element.fullWidth}>
                            {element.text}
                        </Button>
                    )
                }
            })}
        </div>
     );
}

export default FooterButtons;