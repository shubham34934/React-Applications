import React from 'react';
import Calc from './Games/Calculator/mainCalc.js';


export default class List extends React.Component{
   render(){
     return(
          <div className="container list"> <Calc/> View More</div>
     );
   }
}
