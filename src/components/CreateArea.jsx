import React, { useState } from "react";

function CreateArea(props) {
  const [noa, setNoa] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoa((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(noa);
    setNoa({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={noa.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={noa.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

// const [title, setTitle] = useState("");
// const [content, setContent] = useState("");

// function handletitleChange(event){
//  const v = event.target.value;
//  setTitle(v);
// }

// function handlecontentChange(event){
//  const c = event.target.value;
//  setContent(c);
// }
