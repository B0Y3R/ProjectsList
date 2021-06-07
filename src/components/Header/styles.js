import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: '#F7F9FD',
      padding: '10px 100px',
      borderBottom: '1px solid #F7F9FD',
      minHeight: 124,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 20,
      [theme.breakpoints.down('xs')]: {
        padding: '10px 30px',
      },
    },
    toolBar: {
      minHeight: 100,
      alignItems: 'flex-start',
      padding: 0,
    },
    img: {
      height: 32,
      width: 32,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color: "#424242",
      fontWeight: 550,
    },
    fabButton: {
      position: 'absolute',
      right: 100,
      top: 95,
      backgroundColor: "#4A475F",
      "&:hover": {
        backgroundColor: "#3D3A4F",
      },
      [theme.breakpoints.down('xs')]: {
        top: 35,
        right: 30,
      },
    }, 
  }));

  export default styles;