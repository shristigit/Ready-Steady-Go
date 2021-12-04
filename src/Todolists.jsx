import React from 'react';
import './App.css';


const TodoLists = (props) => {
    return  (
     
    <>
    <div  className="todo_style">
     <li  > 
    
    <button onClick={ () => {
        props.onSelect(props.id); //<i class ="fa fa-times" aria-hidden="true"/>
        <br/>
    } }> <b> - </b></button> 
    
    {props.text} </li>

    </div> 

    </>
    );
    

};

export default TodoLists;