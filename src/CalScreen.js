import React from 'react';
import './CalScreen.css';
const CalScreen=(props)=>{
return(

    <div className='result'>

    <p> {props.result}</p>

    </div>
);
}

export default CalScreen;