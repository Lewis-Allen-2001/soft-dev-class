import { useState } from 'react'
import './App.css'
import "./Components/Counter"
import ClickerButton from './Components/Counter';

export default function App() {
  const [showDog, setShowDog] = useState(false);

  function toggleDog() {
    setShowDog(!showDog);
  }

  return (
    <div>
      <button onClick={toggleDog}>Show Dog</button>

      {showDog && (
        <img src="https://media.tenor.com/z2tg-2P2AswAAAAM/funny-smile.gif" />
      )} 

<ClickerButton/>

    </div>
  )
}


