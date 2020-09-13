import React,{Component} from 'react';
import classes from './Person.css';
import '../../../hoc/Auxiliary'
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass'
import PropType from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
   constructor(props){
      super(props);
      this.inputreff=React.createRef();
   }
   static contextType=AuthContext;
   componentDidMount(){
     // this.inputElment.focus();
     this.inputreff.current.focus();
   }
render(){
return(
   <Aux>
    {/* <React.Fragment> */}
    
      { 
      
      this.context.authenticated? <p> Authenticated</p> : <p>Please login</p>
      

      } 
       
     
     <p key="i1" onClick={this.props.letsclick}> I am a person   === {this.props.name} === {this.props.age} </p>
        <p key="i2"> {this.props.children}</p>
        <input key="i3" type="text" 
        //ref={(inputEL)=>{this.inputElment=inputEL}} 
        ref={this.inputreff}
   
        onChange={this.props.changed} value={this.props.name}/>
     {/* //   </React.Fragment> */}
     </Aux>
        );
        

}
}

Person.propTypes ={
  letsclick:PropType.func,
  name:PropType.string,
  age:PropType.number,
  changed:PropType.func  
};
export default withClass(Person,classes.Person);