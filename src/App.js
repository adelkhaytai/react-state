import React from 'react'
import react,{useState} from 'react'
import Show from './Show';
import css from './App.css'


const person ={
  fullname: <div className='name'><h1>khayati Adel</h1></div>,
  bio: 'HTML , CSS , JS  , REACT JS',
  imgSrc: <img className='image' src="/me.jpg" alt="" /> ,
  profession: 'Full Stack Devloper',

}

class App extends React.Component {
  render(){
    return (
      <div>
        <Show 
        fullname={person.fullname}
         bio={person.bio} 
         imgSrc={person.imgSrc}
          profession={person.profession}
          />
      </div>
    );
    }
  }
export default App