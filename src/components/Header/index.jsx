import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';

import ThunkableBeaver from '../../assets/ThunkableBeaver.png';

import styles from './styles';

export default function Header({ addProject }) {
      
  const classes = styles();

  return (
    <AppBar position="static" className={classes.appBar}>
        <img src={ThunkableBeaver} alt="thunkable-beaver" className={classes.img} />
        <Typography variant="h6" className={classes.title}>MY PROJECTS</Typography>
        <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={addProject}>
            <AddIcon />
        </Fab>
    </AppBar>
  );
}