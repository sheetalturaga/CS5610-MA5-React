import React from "react";
import Square from "./Square";
import './Board.css';
import { useState } from 'react';


// Parent Component
export default function Board() {
  const [countState, setCount] = useState(0);

  const incrementCount = () => setCount(countState => countState + 1);
  const decrementCount = () => setCount(countState => countState - 1); 


   
   return(
      <div id = 'row-container'>
         <h1>Count: {countState}</h1>
         <div id = 'row'>
         <Square incrementCount = {incrementCount} decrementCount = {decrementCount}/>
         <Square incrementCount = {incrementCount} decrementCount = {decrementCount}/>
         <Square incrementCount = {incrementCount} decrementCount = {decrementCount}/>
         <Square incrementCount = {incrementCount} decrementCount = {decrementCount}/>
         </div>
      </div>
   );

}