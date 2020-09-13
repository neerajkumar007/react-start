import React,{Component} from 'react';
class ErrorBoundary extends Component{
    state={
        hasError:false,
        message:''
    }
    componentDidCatch=(error,info)=>{
        this.setState({hasError:true,message:error});
    }
    
    render(){
        
       if(this.state.hasError){
          return <h1>{this.state.message}</h1>
       }else{
        return <h1>{this.props.children}</h1>
       }
      
    }
}

export default ErrorBoundary;