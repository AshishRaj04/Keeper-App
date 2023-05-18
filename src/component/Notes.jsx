import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Notes(props) {
  function deleteThis() {
    props.deleteNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteThis}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Notes;
