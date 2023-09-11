import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'


function App() {

 function handleClick(){
   alert('please clicke me ')
 }

 function handleClick2 (){
  alert('click me quickly')
 }

function addToFour(num){
  alert(num + 5);

}


  return (
    <>  
      <h3>React core Concept 2</h3>
      {/* Normal way to click: 
         onclick = "handleClick()"
      */}
      <Friends></Friends>

      <Users></Users> 

      <Team></Team> 

      <Counter></Counter>

      <button onClick={handleClick} className='btn-style'>Click Me </button>
      <button onClick={handleClick2} className='btn-style'>Click Me 2 </button>
      {/*I can use Annonymas function to handle onClick function and give alert from inside this  function */}
      <button onClick={ () =>{
        alert('click me 3')
      }} className='btn-style'>Click Me 3</button>
      <button onClick={ () => addToFour(3)} className='btn-style'>Four</button>
      
    </>
  )
}

export default App
