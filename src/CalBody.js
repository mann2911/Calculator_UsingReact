import React from 'react';
import './CalBody.css'


const calBody=(props)=>{
    
    let buttonPressed=(e)=>{
        props.buttonPressed(e.target.name);
    }
    
    let body=[];
    let calName=["(",")","X","CE","1","2","3","+","4","5","6","-","7","8","9","*","0","00",".","/","sqrt","sq","cube","="];
    let calValue=["(",")","X","CE","1","2","3","+","4","5","6","-","7","8","9","*","0","00",".","/","sqrt","sq","cube","="];
    for(let i=0;i<calValue.length;i++){
        body.push(<button name={calName[i]} onClick={buttonPressed}>{calValue[i]}</button>);
    } 
    
    return(
            <div className='buttons'>
             {body}
            </div>
    );
}

export default calBody;