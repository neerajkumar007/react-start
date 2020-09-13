import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log("Persons state");
    //     return state;
    // }
    shouldComponentUpdate(nextProps,nextState){
        // if(nextProps.person!==this.props.person){
        //     console.log("P ShouldPersons state");
        //     return true;
  
        // }else{
        //     return false;
        // }
        return true;
              }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(" p getsnamposbefor update");
        return {message:"something to print"}
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("p updaate");
        console.log(snapshot);
    }
    componentWillUnmount(){
        console.log('p unmount');
    }
  render(){
    return (
       this.props.person.map((p,k)=>{
            return <ErrorBoundary key={p.id}> <Person  
            letsclick={()=>this.props.clicked(k)}
            name={p.name} 
            age={p.age}  
             changed={(event)=>{this.props.changed(event,p.id)}}
             auth={this.props.auth}
             /> </ErrorBoundary>
          })

    )
}
}


export default Persons;
