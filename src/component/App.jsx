import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
import CreateArea from "./CreateArea";

function App() {
  const [arrays, setArray] = React.useState([]);

  function handelNote(newData) {
    setArray((prevValue) => {
      return [...prevValue, newData];
    });

    console.log(newData);
  }

  function handelDelete(id) {
    setArray((prevValue) => {
      return prevValue.filter((item , index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onData={handelNote} />

      {arrays.map((data, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={data.title}
            content={data.content}
            deleteNote={handelDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content. DONE!
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
