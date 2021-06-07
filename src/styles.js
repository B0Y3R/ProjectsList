import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = makeStyles(() => ({
    root: {
      backgroundColor: '#F7F9FD',
      height: '100vh',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    projectBox: {
      marginTop: 40,
      width: '100%',
    },
  }));

export default styles;