import React from 'react';
import _ from 'lodash';

export default class CreateTask extends React.Component{
  constructor(){
    super();
    this.state={
      error:null
    };
  }
   render(){
     return(
          <form onSubmit={this.handleSubmit.bind(this)}>
           <input ref="create" placeholder="What do i need to do?" type="text"/>
           <button> Create </button>
           {this.state.error}
          </form>
     );
   }
   handleSubmit(event){
     event.preventDefault();
     const createInput= this.refs.create;
     const taskName= createInput.value;
     const validateInput= this.validateInput(taskName);
     console.log(validateInput);
     if(validateInput){
       this.setState({error: validateInput});
     }
     else{
        this.props.createTask(this.refs.create.value);
        this.setState({error: null});
     }

     this.refs.create.value="";
   }
   validateInput(name){
     if(!name){
       return "please write something";
     }
     else if (_.find(this.props.tasks, task => task.name===name)) {
       return "Already Exists";
     }
     else {
       return null;
     }
   }
}
