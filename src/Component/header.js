import React from 'react';


export default class Header extends React.Component{
   render(){
     return(
       <nav className="navbar navbar-default">
          <div className="container">
             <div className="navbar-header">
               <a className="navbar-brand">React Applications</a>
             </div>
             <ul className="nav navbar-nav">
               <li className="active"><a>Home</a></li>
               <li><a>About</a></li>
               <li><a>Documentation</a></li>
             </ul>
          </div>
      </nav>
    );
   }
}
