
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SimpleModal from '@material-ui/core/Modal';
import { useState } from "react";
import "./add.css"
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

 function Add({handleMovie} ) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [Mov, setMov] = useState({title:'',description:'',posteUrl:'',rate:''})
  const handlechange= e =>{
    const {name, value}=e.target;
    setMov(prevState => ({...prevState, [name]:value}))
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Title</h2>
      <input value={Mov.title} onChange={handlechange} name="title"/>
      
      <h2>description</h2>
      <input value={Mov.description} onChange={handlechange} name="description" />
      <h2>posteUrl</h2>
      <input value={Mov.posteUrl} onChange={handlechange} name="posteUrl"/>
      <h2>rate</h2>
      <input value={Mov.rate} onChange={handlechange}name="rate"/>
      <bUtton  onClick={() => {handleMovie(Mov);setMov("");handleClose()}}>submite</bUtton>
    
      <SimpleModal />
    </div>
  );console.log(Mov)

  return (
    <div className="butt">
      <button className="butto" type="button" onClick={handleOpen}>
        Add Movie
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        
        {body}
      </Modal>
    </div>
    
  );
}

export default Add
