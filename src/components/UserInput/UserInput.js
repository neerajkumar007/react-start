import React from 'react';
const userInput=(props)=>{
    return(
        <div>
         <input type="text" onChange={props.changedUsername}  value={props.username}/>
        </div>
    );
}
export default userInput;