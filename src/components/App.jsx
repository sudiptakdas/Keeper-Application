import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function addNote(note) {
    setNote((prevNote) => {
      return [...prevNote, note];
    });
  }

  function deleteNote(id) {
    setNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((i, index) => (
        <Note
          id={index}
          ondelete={deleteNote}
          key={index}
          title={i.title}
          content={i.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

// function handletitleChange(event) {
//   const v = event.target.value;
//   setTitle(v);
// }

// function handlecontentChange(event) {
//   const c = event.target.value;
//   setContent(c);
// }

// function deleteItem(id) {
//   setItems((prevItems) => {
//     return prevItems.filter((item, index) => {
//       return index !== id;
//     });
//   });
// }
