import React from 'react';
import ToDoList from './toDoList';
import CreateTask from './createTask';
import _ from 'lodash';

const tasks=[
{
  name: 'study css',
  toComplete: false
},
{
  name: 'apply for job',
  toComplete: true
}
];
export default class ToDo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasks
    };
  }
   render(){
     return(
          <div>
             React Todo App
             <CreateTask  tasks={this.state.tasks} createTask={this.createTask.bind(this)}/>
             <ToDoList    tasks={this.state.tasks} onDelete={this.onDelete.bind(this)} toggleTask={this.toggleTask.bind(this)} onSave={this.onSave.bind(this)}/>
          </div>
     );
   }
   toggleTask(name){
     const foundTask= _.find(this.state.tasks, task =>task.name=== name);
     foundTask.toComplete =! foundTask.toComplete;
     this.setState({tasks:this.state.tasks});
   }
   onSave(oldName,newName){
     const foundTask=_.find(this.state.tasks,task=> task.name===oldName);
     foundTask.name= newName;
     this.setState({tasks:this.state.tasks});
   }
   onDelete(name){
     _.remove(this.state.tasks,task=> task.name===name);
     this.setState({tasks:this.state.tasks});
   }
   createTask(task){
     this.state.tasks.push({
       name: task,
       toComplete: false
     });
     this.setState({
       tasks : this.state.tasks
     });
   }
}
