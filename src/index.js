import React from 'react';
import {render} from 'react-dom';
import App from './Component/app';
import Header from './Component/header';
import Footer from './Component/footer';
import Sidebar from './Component/sidebar';
import './index.css';
class Index extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <div className='sidebar'>
         <Sidebar/>
        </div>
        <App/>
        <Footer/>

      </div>
    );
  }
}
render(<Index/>,document.getElementById('root'))
