import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

import moment from 'moment';

import Grid from "@material-ui/core/Grid";

import Header from './components/Header';
import ProjectColumn from './components/ProjectColumn';
import Modal from './components/Modal';

import styles from './styles';

function App() {

  const classes = styles();

  const [projects, setProjects] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [open, setOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);

  const addNewProject = () => {
    const newProject = {
      name: null, 
      created_at: moment(new Date()).format('MMM Do YYYY h:mm a'),
      id: uuidv4(),
      editing: true,
    }

    if (projects.length) {
      setProjects([...projects, newProject])
    } else {
      setProjects([newProject])
    }
  }

  const updateProject = (event, id) => {
  
    if (event.key === 'Enter') {
      const mutProjects = projects.filter(p => p.id !== id);
      const editedProject = projects.find(p => p.id === id);

      editedProject.name = userInput; 
      editedProject.editing = false;

      if (mutProjects.length) {
        setProjects([...mutProjects, editedProject]);
      }

      setUserInput('')
    }
  }

  const editProject = (id) => {
    const mutProjects = projects.filter(p => p.id !== id);
    const editedProject = projects.find(p => p.id === id);
    editedProject.editing = true;

    if (mutProjects.length) {
      setProjects([ ...mutProjects, editedProject ])
    } else {
      setProjects([editedProject]);
    }
  }

  const deleteProject = (id) => {
    const mutProjects = projects.filter(p => p.id !== id);

    setProjects(mutProjects);
    setOpen(false);
    setProjectId(null);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setUserInput(value);
  }

  const toggleModal = (value, id) => {
    setProjectId(id);
    setOpen(value);
  }

  const moveProject = (dragIndex, hoverIndex) => {
    // Get the dragged element
    const draggedProject = projects[dragIndex];
    /*
      - copy the dragged project before hovered element (i.e., [hoverIndex, 0, draggedproject])
      - remove the previous reference of dragged element (i.e., [dragIndex, 1])
      - here we are using this update helper method from immutability-helper package
    */
    setProjects(
      update(projects, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, draggedProject]]
      })
    );
};

  return (
    <div className={classes.root}>
      <Header addProject={addNewProject} />
      <Grid container className={classes.container}>
        <DndProvider backend={HTML5Backend}>
          <Grid item xs={10} className={classes.projectBox}>
            { 
              projects.map((project, index) => 
                <ProjectColumn 
                  updateProject={updateProject} 
                  handleChange={handleChange} 
                  editProject={editProject}
                  deleteProject={() => toggleModal(true, project.id)}
                  project={project}
                  index={index}
                  moveProject={moveProject}
                />
              )
            }
          </Grid>
        </DndProvider>
      </Grid>
      <Modal 
        open={open} 
        cancel={() => toggleModal(false)} 
        projectId={projectId} 
        deleteProject={deleteProject}
      />
    </div>
  );
}

export default App;
