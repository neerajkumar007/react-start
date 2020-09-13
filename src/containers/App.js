import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context'



class App extends Component {
  constructor(props){
    super(props);
    console.log("owner constructor");
  }

  state ={
    person:[
      {id:1, name:'test1', age:28},
      {id:2, name: 'test2', age:27},
      {id:3, name: 'test3', age:28} 
    ],
    showhide:false,
    showCockpit:true,
    counter:0,
    authenticated:false   
  }

  loginHandler=()=>{

    this.setState({authenticated:true});
    console.log(this.state.authenticated);
  }

  state1={
      username:"neeraj"
  }

  static getDerivedStateFromProps(props,state){
    console.log("getDeviredStateFromProps");
    return state;
  }
  // componentWillMount(){
  //   console.log("componentWillMount");
  // }
  
  componentWillUnmount(){
    console.log("unmount");
  }
  switchNameHandle=(newname) =>{
    //this.state.person[0].name="testdddd";
    this.setState({person:[
      {id:'1', name: newname, age:21},
      {id:'2', name: 'test5', age:22},
      {id:'3', name: 'test6', age:22},
    ],

   })
  }
  hnagedHandler= (event,id)=>{
    const pIndex=this.state.person.findIndex(p=>{
      return p.id===id;
    });

    const p1= {...this.state.person[pIndex]};
    //const p1 = Object.assign({},this.state.person[pIndex]);
    p1.name=event.target.value;

    const p2 = [...this.state.person]
    p2[pIndex]=p1;
    this.setState((prevState,props)=>{
      return {person:p2,counter:prevState.counter+1}
    });
  }

  // changeUserName=(event)=>{
  //   this.setState(this.state1={
  //     username:event.target.value
  // });
 // }

  deleteOneElement=(i)=>{
   // const t =this.state.person.slice();
    const t= [...this.state.person]; //spread operator
    t.splice(i,1);
    this.setState({person:t});

  }

  toggleHandler=()=>{
    const doesshow=this.state.showhide;
    this.setState(
      {
        showhide:!doesshow    
      }
    );
  }
  
  render() {
    //let buttonclass='';
    console.log("rending")
    let personss =null;
    if (this.state.showhide) {
    personss=(     
        <div>
          <Persons 
           person={this.state.person}
            clicked={this.deleteOneElement}
             changed={this.hnagedHandler}
              auth={this.state.auth} />
          {/* {this.state.person.map((p,k)=>{
            return < ErrorBoundary key={p.id}> <Person  
            letsclick={()=>this.deleteOneElement(k)}
            name={p.name} 
            age={p.age}  
             changed={(event)=>{this.hnagedHandler(event,p.id)}}
             /> </ErrorBoundary>
          })} */}
       
        </div> 
    )
   // buttonclass=classes.Red;
    }  
    

    return (
      
      <Aux>
        <button onClick={()=>{
          this.setState({showCockpit:false})
        }}>Click New button</button> 
       {/* <h1>HI i am tehre </h1>
       <p className={classesAssigned.join(' ')}>This si working</p>
       <button className={buttonclass} onClick={this.toggleHandler}>Click me</button> */}
      
      <AuthContext.Provider value={{authenticated:this.state.authenticated,login:this.loginHandler}}>
       {
         this.state.showCockpit?
       <Cockpit
       login={this.loginHandler}
        perslength={this.state.person.length} showperson={this.state.showhide} clicked={this.toggleHandler} title={this.props.appTitle} ></Cockpit>
        :null
      }
       {personss}

       </AuthContext.Provider>

        {/* <UserInput  username={this.state1.username} changedUsername={this.changeUserName}/> */}
        {/* <UserOutput username1={this.state1.username}  /> */}
      
      </Aux>
      
);
    //return React.createElement('div',{className:'App'},React.createElement("h1",null,"heelo"));
  }
}



export default withClass(App,classes.App);
