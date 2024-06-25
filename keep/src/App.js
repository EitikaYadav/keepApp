import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';
function App() {
  const [addItem,setaddItem] = useState([]);

const addNote=(note)=>{
  // alert("I am clicked");
  setaddItem((prevData)=>{
    return [...prevData,note];
  })
};

const onDelete= (id)=>{
   setaddItem((oldData)=>
   oldData.filter((currdata,index)=>{
    return index!==id;
   })
   );
};

  return (
<div>
<Header/>
<CreateNote passNote={addNote}/>


{addItem.map((val ,index) =>{
  return <Note 
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    delete = {onDelete}
    />
})} 



<Footer/>
</div>
    );
}

export default App;
