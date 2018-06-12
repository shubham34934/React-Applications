import React from 'react';
import ContactList from './contactList';
import './contact.css'



export default class Contacts extends React.Component{
  state = { contacts: []}
  readResponseAsJSON(response) {
    return response.json();
  }
  componentDidMount(){
    fetch('https://api.randomuser.me/?nat=us.gb&results=50')
    .then(this.readResponseAsJSON)
    .then(parsedResponse => parsedResponse.results.map(user =>(
      {name:user.name.first,email: user.email,thumbnail:user.picture.thumbnail}
  )))
  .then(contacts=> this.setState({contacts})
   );
  }
   render(){
     return(
          <div>
            <h3> Contact Lists </h3>
            <ContactList contacts={this.state.contacts}/>
          </div>
     );
   }
}
