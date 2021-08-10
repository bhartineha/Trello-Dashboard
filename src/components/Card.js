import React, { useState, useContext } from 'react';
import { Paper, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';
//import storeApi from '../utils/storeApi';
import Popup from './Modal/Popup';

const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
  btnSave:{
    width: '50px',
    padding: '5px',
    color:'#fff',
    background: '#0079bf',
    borderRadius: '5px',
    margin: '5px',
  },
}));
export default function Card({ card, index, listId }) {
  const classes = useStyle();
  const [buttonPopup, setButtonPopup] = useState(false);
  //const { addMoreCard, addMoreList } = useContext(storeApi);
  
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBtnConfirm = (e) => {
    // addMoreCard(title, listId);
    // setTitle('');
  }
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <a onClick={ () => setButtonPopup(true)}> 
          <Paper className={classes.card}>{card.title}
          </Paper> </a>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h4>{card.title}</h4>

          <Paper className={classes.card}>
          <InputBase
            multiline
            fullWidth
            value={title}
            onChange={handleOnChange}
            inputProps={{
              className: classes.input,
            }}
            placeholder={'Add more detailed description'
            }
          />
         
        </Paper>
        <button className={classes.btnSave} onClick={handleBtnConfirm}>
          Save
        </button>
          </Popup>
        </div>
      )}
    </Draggable>
  );
}
