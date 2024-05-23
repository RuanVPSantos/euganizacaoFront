import theme from "../../../theme";
import PropTypes from 'prop-types';

const styles = {
  Card: {
    margin: '2em auto',
    alingSelf: 'center',
    justifySelf: 'center',
    width: '80vw',
    maxWidth: '400px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '12px',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '1em',
    padding: '5%',
  },
};


const LoginCard = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

// Definição dos PropTypes
LoginCard.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoginCard;
