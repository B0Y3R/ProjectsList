import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = makeStyles((theme) => ({
    column: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: "#FDFDFD",
      width: '100%',
      padding: '15px 25px',
      '&:first-of-type': {
          borderTop: '2px solid #e8e8e8',
      },
      cursor: 'grab',
      borderBottom: '2px solid #e8e8e8',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    displayNone: {
      display: 'none'
    },
    projectInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        alignItems: 'start'
      },
    },
    secondaryContent: {
        width: '100%',
    },
    img: {
      height: 32,
      width: 32,
    },
    icon: {
        height: 24,
        width: 24,
        opacity: 0.3,
        "&:hover": {
            opacity: 0.7,
        }
    },
    textField: {
      padding: 4,
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#84b7f9',
        },
      },
    },
    name: {
        fontWeight: 600,
    },
    date: {
        opacity: 0.4,
    },
  }));

  export default styles;