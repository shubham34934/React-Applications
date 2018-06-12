import React from 'react';

export default class Contact extends React.Component{

   render(){
     return(
          <li> {this.props.contact.name.first} {this.props.contact.email} </li>
     );
   }
}
