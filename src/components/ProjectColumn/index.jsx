import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';

import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

import defaultProjectIcon from '../../assets/defaultProjectIcon_2x.png';

import styles from './styles';

export default function ProjectColumn({ updateProject, handleChange, editProject, deleteProject, project, index, moveProject }) {
    const classes = styles();
    const ref = useRef(null); 
    const type = "Project";

        // useDrop hook is responsible for handling whether any item gets hovered or dropped on the element
    const [, drop] = useDrop({
    // Accept will make sure only these element type can be droppable on this element
    accept: type,
    hover(item) { // item is the dragged element
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index;
        // current element where the dragged element is hovered on
        const hoverIndex = index;
        // If the dragged element is hovered in the same place, then do nothing
        if (dragIndex === hoverIndex) { 
          return;
        }
        // If it is dragged around other elements, then move the project and set the state with position changes
        moveProject(dragIndex, hoverIndex);
        /*
          Update the index for dragged item directly to avoid flickering
          when the project was half dragged into the next
        */
        item.index = hoverIndex;
      }
    });

    // useDrag will be responsible for making an element draggable. It also expose, isDragging method to add any styles while dragging
    const [{ isDragging }, drag] = useDrag({
        // item denotes the element type, unique identifier (id) and the index (position)
        type: type,
        item: { type: type, id: project.id, index },
        // collect method is like an event listener, it monitors whether the element is dragged and expose that information
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    /* 
        Initialize drag and drop into the element using its reference.
        Here we initialize both drag and drop on the same element (i.e., project component)
    */
    drag(drop(ref));

    



    const renderField = () => {
        if (project.editing) {
            return (
                <TextField 
                    variant="outlined"
                    placeholder="Name your project"
                    onKeyPress={(e) => updateProject(e, project.id)} 
                    defaultValue="" 
                    onChange={handleChange} 
                    className={classes.textField}
                    autoFocus
                    InputProps={{
                        classes: {
                            input: classes.textField,
                            label: classes.label,
                        }
                    }}
                    InputLabelProps={{
                        classes: {
                            root: classes.label,
                        }
                    }}
                />
            )
        }
        return (
            <>
                <Typography variant="h6" className={classes.name}>{project.name}</Typography>
                <BorderColorOutlinedIcon onClick={() => editProject(project.id)} className={classes.icon} />
            </>
        )
    }

    return (
        <Grid item xs={12} key={project.id} className={isDragging ? classes.displayNone : classes.column} ref={ref}>
            <Grid item xs={12} sm={4} className={classes.projectInfo}>
                <img src={defaultProjectIcon} className={classes.img} alt="icon" />
                { renderField() }
            </Grid>
            { project.name && 
                <Grid item xs={12} sm={6} className={classes.projectInfo}>
                    <Typography variant="subtitle1" className={classes.date}>{project.created_at}</Typography>
                    <DeleteIcon className={classes.icon} onClick={() => deleteProject(project.id)} />
                </Grid>
            }
        </Grid>
    )
}