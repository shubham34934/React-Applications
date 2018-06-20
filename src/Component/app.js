import React from 'react';
import Calculator from './React_Apps/Calculator/mainCalc';
import ToDo from './React_Apps/ToDo/toDo';
import Contacts from './React_Apps/Contacts/contacts';
import TicTac from './React_Apps/TicTacToe/main';
import Calc from './React_Apps/Flames/mainCalc0';



export default class App extends React.Component{
   render(){
     return(
          <div className='list'>
            <div className='listItems'>
             <Calc/>
            </div>
            <div className='listItems'>
             <ToDo/>
            </div>
            <div className='listItems'>
             <Contacts/>
            </div>
            <div className='listItems'>
             <TicTac/>
            </div>
            <div className='listItems'>
            </div>
            <div>
              <Calculator/>
            </div>
          </div>
     );
   }
}
