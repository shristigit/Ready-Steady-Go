import React, {useRef, useState,useEffect} from 'react';
 import TodoLists from './Todolists'; 
 import './App.css';
 
 

 const csstyle={
     listStyleType:"none"
 };

 


const App = () => {


     const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);


     

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
     <h1> READY STEADY GO! </h1> <br/>
     <input type="text" placeholder="add an item" value={inputList} onChange={itemEvent}></input>
     <button onClick={listItems } class="add" > <b> + </b></button><br/>
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

     <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display" >
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
      </div>
   

     
      <div >
     
     
     </div>
     
     </div>
     
     </div>

     ]

     )

};

export default App;

