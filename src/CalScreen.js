import React from 'react';
import './CalScreen.css';
const calScreen=(props)=>{
return(

    <div className='result'>

    <p> {props.result}</p>

    </div>
);
}

export default calScreen;