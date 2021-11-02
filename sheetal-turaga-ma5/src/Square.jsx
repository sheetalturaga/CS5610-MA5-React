import { useState } from 'react';
import './Square.css';

// Child Component
export default function Square(props) {

    // object destructuring for each square
    const {incrementCount, decrementCount} = props;
    
    //Declaring the switch state as false
    // If its false, then the switch is off
    // else its on (true)
    const [switchState, setSwitchState] = useState(false);


    // calling the parent functions using props
    // increments the count based the click event
    const handleClickEvent = () => {
        // 
        setSwitchState(!switchState); 
        if(switchState === false) {
            incrementCount();
        } else {
            decrementCount();
        }
    }

    return (<div id = 'singlesquare' 
            onClick={handleClickEvent} 
            //setting css as an object inline
            style = {{backgroundColor: switchState? 'black' : 'white'}}>
        </div>);
}