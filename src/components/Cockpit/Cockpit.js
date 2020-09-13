import React,{useEffect,useRef,useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'
const cockpit =(props)=>{
  const toggleref = useRef(null);
  const authContext=useContext(AuthContext);
  useEffect(()=>{
    console.log("c useefffect");
  const timer = setTimeout(()=>{
    //  alert("c test");

    },3000);
    toggleref.current.click();

   return ()=>{
    //  clearTimeout(timer);
     console.log("c cllean up ")
   }
  },[]);


  useEffect(()=>{
    console.log(" c useefffect");
   return ()=>{
     console.log("c cllean up ")
   }
  });
    let buttonclass='';
    if(props.pers){
        buttonclass=classes.Red;
    }
    const classesAssigned=[];
    if(props.perslength<=2){
      classesAssigned.push(classes.red);
    }
    if(props.perslength<=1){
      classesAssigned.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title} </h1>
            <p className={classesAssigned.join(' ')}>This si working</p>
            <button ref={toggleref} className={buttonclass} onClick={props.clicked}>Click me</button>
            {/* <AuthContext.Consumer> */}
              {
                <button onClick={authContext.login}> Please Login</button>
              }

            {/* </AuthContext.Consumer>
             */}

        </div>

    )
}

export default React.memo(cockpit);