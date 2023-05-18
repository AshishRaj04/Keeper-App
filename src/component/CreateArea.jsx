import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function CreateArea(props) {
  const [note, takeNote] = React.useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;

    takeNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    props.onData(note);

    console.log(note);

    takeNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          name="title"
          placeholder="Title"
          onChange={handelChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handelChange}
          value={note.content}
        />
        <button onClick={addNote} type="submit">
          <AddCircleOutlineIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
