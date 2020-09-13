import React from 'react';
const withClass = (WrappedCompoent,className) =>{
    
   return props =>(
    <div className={className}>
     <WrappedCompoent {...props}/>
    </div>
    );
} 

    


export default withClass;

   // const withClass = props=>(
    //     <div className={props.classes}>{props.children}</div>
    //     );
 