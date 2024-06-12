const styles = {
  Button: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '64px',
    left: '696px',
    width: '50px',
    height: '50px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '12px',
    color: '#ffffff',
    backgroundColor: '#16161e',
    outline: 'none',
  },
  Icon: {
    color: '#ffffff',
    fill: '#ffffff',
    width: '20px',
    height: '20px',
    fontSize: '20px',
  },
};

const IconComponent = () => (
  <svg style={styles.Icon}  viewBox="0 0 448 512">
    <path d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464z">
    </path>
  </svg>
);

const defaultProps = {
  IconComponent,
};

const IconButton = (props) => {
  return (
    <button style={styles.Button}>
      {
        props.IconComponent 
          ? <props.IconComponent style={styles.Icon} /> 
          : <defaultProps.IconComponent />
      }
    </button>
  );
};

export default IconButton;