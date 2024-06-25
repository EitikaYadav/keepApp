import React from "react";

const Note = (props) => {
    const deleteItem =()=>{
         props.delete(props.id);
    };
  return (
    <React.Fragment>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="minus_sign" onClick={deleteItem}>
          ➖
        </button>
      </div>
    </React.Fragment>
  );
};

export default Note;
