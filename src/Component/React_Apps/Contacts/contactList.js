import React from 'react';
import Contact from './contact';


export default class ContactList extends React.Component{
  constructor(props){
    super(props);
    this.state={
        search: "",
    };
  }
  updateSearch(event){
    this.setState(
      {search: event.target.value}
    )
  }
  addContact(event){
    event.preventDefault();
    let name= this.refs.name.value;
    let email= this.refs.email.value;
    let thumbnail= "www.google.com";
    this.props.contacts=this.props.contacts.concat({name,email,thumbnail});
  }
   render(){
     let filteredContacts= this.props.contacts.filter(
       (contact)=> {
          return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
       }
     );
     return(
          <div>
             <form onSubmit={this.addContact.bind(this)}>
               <input type="text" ref="name"/>
               <input type="text" ref="email"/>
               <button type="submit"> Add New Contact </button>
             </form>
             <input type="text" onChange={this.updateSearch.bind(this)} placeholder="Search" value={this.state.search}/>
             {
               filteredContacts.map((contact,index)=><Contact key={index} contact={contact}/>
            )}

          </div>
     );
   }
}
