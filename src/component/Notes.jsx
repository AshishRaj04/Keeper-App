import React from "react";

function Notes(props) {
  function deleteThis() {
    props.deleteNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteThis}>DELETE</button>
    </div>
  );
}

export default Notes;
