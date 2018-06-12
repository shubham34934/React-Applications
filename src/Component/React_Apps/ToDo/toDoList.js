import React from 'react';
import ToDoListHeader from './toDoListHeader';
import ToDoListItem from './toDoListItem';



export default class ToDoList extends React.Component{

   render(){
     const tasks= this.props.tasks.map((task,index) => <ToDoListItem onSave={this.props.onSave} onDelete={this.props.onDelete} toggleTask={this.props.toggleTask} key={index} {...task}/>);
     return(
          <table>
           <ToDoListHeader/>
           <tbody>
             {tasks}
           </tbody>
          </table>
     );
   }
}
