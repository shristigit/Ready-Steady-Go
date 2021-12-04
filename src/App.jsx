import React, { useState} from 'react';
 import TodoLists from './Todolists'; 
 import './App.css';
 

 const csstyle={
     listStyleType:"none"
 };

const App = () => {

  const [inputList,setInputList] = useState(" ");
  const [Items,setItems] = useState([]);
  const  itemEvent = (event) => {
       setInputList(event.target.value);
  };

  const listItems = () => {
       setItems((oldItems) => {
            return [...oldItems,inputList];
       });
       setInputList('   ');
  };

   const deleteItem = (id) => {
       setItems ((oldItems) => {
            return oldItems.filter((arrelem,i) =>{
                    return i!== id;
            });
       });
 
  }; 

     return (   [
    <div className="main_div">
     <div className="center_div"><br/>
     <h1>TODO LIST</h1> <br/>
     <input type="text" placeholder="add an item" value={inputList} onChange={itemEvent}></input>
     <button onClick={listItems }  > <b> + </b></button><br/>
     <ul style={csstyle}>
      {/*<li>{inputList} </li> */}
      
      {Items.map((itemval,i) => {
            { /* return <li> <button onClick={deleteItem}> <b> - </b> </button>{ itemval}  </li>; */}

            return  <TodoLists keys={i}
            text={itemval}
            id={i}
            onSelect={deleteItem}
            />; 
      }
          )}
     </ul>
     
     </div>
     
     </div>

     ]

     )

};

export default App;

