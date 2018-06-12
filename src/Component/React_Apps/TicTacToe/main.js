import React from 'react';

export default class TicTac extends React.Component{

   render(){
     return(
          <form>
           <input placeholder="What do i need to do?" type="text"/>
           <button> Create </button>
          </form>
     );
  }
}
