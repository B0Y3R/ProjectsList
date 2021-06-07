import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import Question from '../../assets/Question.svg';

import styles from './styles';
import { Grid, Typography } from '@material-ui/core';

export default function Modal({ open, cancel, projectId, deleteProject }) {

    const classes = styles();

    return (
        <Dialog open={open} classes={{ paper: classes.paper }}>
            <Grid container justify="center">
                <img src={Question} className={classes.questionSvg} alt="question svg" />
                <Grid item xs={10}>
                    <DialogTitle className={classes.subtitle}>Are you sure you want to delete this project?</DialogTitle>
                    <Typography variant="subtitle1" className={classes.subtitle}>This action can't be undone</Typography>
                </Grid>
            <Grid item xs={12} className={classes.actionsBox}>
                <Button className={classes.cancelBtn} variant="outlined" onClick={cancel} color="primary">
                    No
                </Button>
                <Button className={classes.confirmBtn}  variant="contained" onClick={() => deleteProject(projectId)} >
                    Yes
                </Button>
            </Grid>
            </Grid>
      </Dialog>
    )
}