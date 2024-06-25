import React, { useState } from "react";

const CreateNote = (props) => {
  
  const [expandIt,setexpandIt] = useState(false);

  const [note, setnote] = useState({
    title: " ",
    content: "",
  });

  const InputEvent=(event)=>{
    const {name,value}= event.target;
    setnote((prevData)=> {
          return{
            ...prevData,
            [name] : value,
          }
    })
     console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setnote({
      title: " ",
      content: "",
    });
  };

  const expandd=()=>{
    setexpandIt(true);
  };

  const depand = () => {
    setexpandIt(false);
  };

  return (
    <React.Fragment>
      <div className="main_note">
        <form className="form">
         { expandIt?
            <input
            placeholder="Title"
            type="text"
            value={note.title}
            name="title"
            onChange={InputEvent}
            autoComplete="off"
          />:null}

          <textarea
            rows=""
            column=""
            value={note.content}
            name="content"
            onChange={InputEvent}
            placeholder="Write a Note..."
            onClick={expandd}
            onDoubleClick={depand}
          />
        </form>

        { expandIt?
            <button className="plus_sign" onClick={addEvent}>
          ➕
        </button>:null}
      </div>
    </React.Fragment>
  );
};

export default CreateNote;
