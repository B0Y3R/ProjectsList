import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = makeStyles((theme) => ({
    paper: {
      padding: '60px 20px 20px 20px',
    },
    root: {
      display: 'flex',
    },
    questionSvg: {
      height: 22,
      width: 22, 
      marginTop: 5,
    },
    confirmBtn: {
      background: '#1890FF',
      color: 'white',
    },
    cancelBtn: {
      borderColor: "#a5a5a5",
      color: 'black',
      marginRight: 10,
    },
    subtitle: {
      padding: '0px 24px'
    },
    actionsBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 40,
    }
  }));

  export default styles;