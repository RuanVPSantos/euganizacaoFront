import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import theme from "../../../theme";

const style = {
    div: {
        paddingTop: '1em',
        paddingBottom: '1em'
    },
    input: {
        margin: '1em 0'
    }
}

function Inputs(props) {
    return (
        <div style={style.div}>
            {props.content.map(element => {
                const error = element.error || [false, ""];

                return (
                    <TextField
                        style={style.input}
                        key={element.key}
                        value={element.value}
                        onChange={element.changeValue}
                        variant='standard'
                        label={element.label}
                        fullWidth
                        error={error[0]}
                        helperText={error[0] ? error[1] : ""}
                        type={element.type}
                        InputLabelProps={{
                            style: {
                                color: theme.palette.text.primary,
                            },
                        }}
                    />
                )
            })}
        </div>
    );
}

// Definição dos PropTypes
Inputs.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        changeValue: PropTypes.func.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        error: PropTypes.arrayOf(PropTypes.any)
    })).isRequired
};

export default Inputs;
