import React from 'react';

export default class ToDoListItem extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      editable: false
    };
  }
  edit(){
    this.setState({
      editable: true
    });
  }
  cancel(){
    this.setState({
      editable: false
    });
  }
  renderTask(){
    const {name, toComplete}= this.props;
    const style= {
      color: toComplete? 'green' : 'red',
      cursor : 'pointer'
    };
    if(this.state.editable){
      return ( <td> <input defaultValue={name} ref="inputTask"/></td>)
    }
    return (<td style={style} onClick={this.props.toggleTask.bind(this,name)}> {this.props.name} </td>);
  }
  save(event){
    event.preventDefault();
    const newName=this.refs.inputTask.value;
    const oldName=this.props.name;
    this.props.onSave(oldName,newName);
    this.setState({
      editable: false
    });
  }
  renderAction(){
      if(this.state.editable){
        return(
          <td>
           <button onClick={this.save.bind(this)}> save </button>
           <button onClick={this.cancel.bind(this)}> Cancel </button>
          </td>
        );
      }
      return(
        <td>
         <button onClick={this.edit.bind(this)}> Edit </button>
         <button onClick={this.props.onDelete.bind(this,this.props.name)}> Delete </button>
        </td>
      );
  }
   render(){
     return(
          <tr>
               {this.renderTask()}
               {this.renderAction()}
          </tr>
     );
   }
}
